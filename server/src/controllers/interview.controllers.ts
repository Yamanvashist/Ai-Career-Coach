import prisma from "../lib/prisma";
import { Request, Response } from "express";

import validateField from "../utils/validation";

import { PromptProps } from "../../Interfaces/interviewInterface";
import InterviewPrompt from "../AiPrompt/InterviewPrompt";
import { analyze } from "../lib/GenAi";

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

        const userId = (req as any).user.userId;

        if (!userId) return res.status(401).json({ message: "Unauthorized User", success: false })

        if (!validateField(category, "Category", res)) return;
        if (!validateField(topics, "Topics", res)) return;
        if (!validateField(difficulty, "Difficulty", res)) return;
        if (!validateField(totalQuestions, "Total Questions", res)) return;
        if (!validateField(experience, "Experience", res)) return;
        if (!validateField(inputMode, "Input Mode", res)) return;

        const prompt = InterviewPrompt({
            category,
            topics,
            difficulty,
            totalQuestions,
            experience,
            inputMode,
        });

        const aiResponse = await analyze(prompt);

        if (!aiResponse?.trim()) return res.status(400).json({
            success: false,
            message: "Failed to generate interview."
        })


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
            },
        });

        return res.status(201).json({
            success: true,
            message: "Interview generated successfully.",
            interviewId: interview.id,
            questions: parsedQuestions.questions,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

export const getInterview = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized User",
            });
        }

        const interviewId = Number(req.params.interviewId);

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
                createdAt: true,
            },
        });

        if (!interview) {
            return res.status(404).json({
                success: false,
                message: "Interview not found.",
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
    const userId = (req as any).user.userId;

    if (!userId) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized user",
        });
    }

    const interviewId = Number(req.params.interviewId);

    if (Number.isNaN(interviewId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid interview ID",
        });
    }

    const { answers } = req.body;

    if (!validateField(interviewId, "interviewId", res)) return;
    if (!validateField(answers, "answers", res)) return;

    const interview = await prisma.interview.findFirst({
        where: {
            id: interviewId,
            userId,
        },
    });

    if (!interview) {
        return res.status(404).json({
            success: false,
            message: "Interview not found",
        });
    }

    const questions = interview.questions

};