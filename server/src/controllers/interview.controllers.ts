import prisma from "../lib/prisma";
import { Request, Response } from "express";

import validateField from "../utils/validation";

import {
  PromptProps,
  InterviewQuestion,
  SubmittedAnswer,
} from "../../Interfaces/interviewInterface";

import InterviewPrompt from "../AiPrompt/InterviewPrompt";
import { analyze } from "../lib/GenAi";

import { InterviewEvaluationPrompt } from "../AiPrompt/InterviewEvaluationPrompt";

export const startInterview = async (req: Request, res: Response) => {
  try {
    const {
      category,
      topics,
      difficulty,
      totalQuestions,
      experience,
      inputMode,
    } = req.body as PromptProps;

    const userId = req.user?.userId;

    if (!userId)
      return res
        .status(401)
        .json({ message: "Unauthorized User", success: false });

    if (!validateField(category, "Category", res)) return;
    if (!validateField(topics, "Topics", res)) return;
    if (!validateField(difficulty, "Difficulty", res)) return;
    if (!validateField(totalQuestions, "Total Questions", res)) return;
    if (!validateField(experience, "Experience", res)) return;
    if (!validateField(inputMode, "Input Mode", res)) return;

    let totalTime: number = 5;

    switch (totalQuestions) {
      case 5:
        totalTime = 10;
        break;
      case 10:
        totalTime = 15;
        break;
      case 15:
        totalTime = 20;
        break;
    }

    const prompt = InterviewPrompt({
      category,
      topics,
      difficulty,
      totalQuestions,
      experience,
      inputMode,
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { credits: true },
    });

    if (!user || user.credits < 5) {
      return res.status(403).json({
        success: false,
        message: "Not Enought credits",
      });
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        credits: {
          decrement: 5,
        },
      },
    });

    const aiResponse = await analyze(prompt);

    if (!aiResponse?.trim())
      return res.status(400).json({
        success: false,
        message: "Failed to generate interview.",
      });

    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsedQuestions;

    try {
      parsedQuestions = JSON.parse(cleanedResponse);
    } catch {
      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON",
      });
    }

    const interview = await prisma.interview.create({
      data: {
        userId,
        category,
        difficulty,
        experience,
        inputMode,
        totalQuestions,
        questions: parsedQuestions.questions,
        totalTime,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Interview generated successfully.",
      interviewId: interview.id,
      questions: parsedQuestions.questions,
      totalTime,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getInterview = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized User",
      });
    }

    const interviewId = Array.isArray(req.params.interviewId)
      ? req.params.interviewId[0]
      : req.params.interviewId;

    if (!validateField(interviewId, "Interview ID", res)) return;

    const interview = await prisma.interview.findFirst({
      where: {
        id: interviewId,
        userId,
      },
      select: {
        id: true,
        category: true,
        difficulty: true,
        experience: true,
        inputMode: true,
        totalQuestions: true,
        questions: true,
        totalTime: true,
        createdAt: true,
        status: true,
      },
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found.",
      });
    }

    if (interview.status == "COMPLETED") {
      return res.status(404).json({
        success: false,
        message: "Interview already completed.",
      });
    }

    return res.status(200).json({
      success: true,
      interview,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const submitInterview = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    const interviewId = Array.isArray(req.params.interviewId)
      ? req.params.interviewId[0]
      : req.params.interviewId;

    if (!interviewId) {
      return res.status(400).json({
        success: false,
        message: "Invalid interview ID",
      });
    }

    const { answers }: { answers: SubmittedAnswer[] } = req.body;

    if (!validateField(interviewId, "interviewId", res)) return;
    if (!validateField(answers, "answers", res)) return;

    const interview = await prisma.interview.findFirst({
      where: {
        id: interviewId,
        userId,
      },
      select: {
        questions: true,
      },
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    const questionArray = interview.questions as unknown as InterviewQuestion[];

    const answerMap = new Map<string, string>(
      answers.map((ans) => [ans.questionId, ans.answer]),
    );

    const interviewData = questionArray.map((question) => ({
      questionId: question.id,
      topic: question.topic,
      question: question.question,
      userAnswer: answerMap.get(question.id) ?? "",
    }));

    const prompt = InterviewEvaluationPrompt(interviewData);

    const aiResponse = await analyze(prompt);

    if (!aiResponse?.trim()) {
      return res.status(500).json({
        success: false,
        message: "Failed to evaluate interview.",
      });
    }

    let report;

    try {
      report = JSON.parse(aiResponse);
    } catch {
      return res.status(500).json({
        success: false,
        message: "Gemini returned invalid JSON.",
      });
    }

    await prisma.interview.update({
      where: {
        id: interviewId,
      },
      data: {
        report,
        status: "COMPLETED",
        overallScore: report.overallScore,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Interview evaluated successfully.",
      report,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getInterviewResult = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    const interviewId = Array.isArray(req.params.interviewId)
      ? req.params.interviewId[0]
      : req.params.interviewId;

    if (!interviewId) {
      return res.status(400).json({
        success: false,
        message: "Invalid interview ID",
      });
    }

    const interview = await prisma.interview.findFirst({
      where: {
        id: interviewId,
        userId,
      },
      select: {
        id: true,
        category: true,
        difficulty: true,
        experience: true,
        inputMode: true,
        totalQuestions: true,
        status: true,
        report: true,
        createdAt: true,
        completedAt: true,
      },
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    if (!interview.report) {
      return res.status(400).json({
        success: false,
        message: "Interview has not been evaluated yet.",
      });
    }

    return res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
