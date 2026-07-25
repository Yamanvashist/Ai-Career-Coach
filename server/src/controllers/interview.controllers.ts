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
        if (!userId) return res.status(400).json({ message: "Unauthorized User", success: false })

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

        const response = await analyze(prompt);

        if (!response) return res.status(400).json({ message: "Failed to Generate" })


        const cleanedResponse = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsedQuestions = JSON.parse(cleanedResponse);

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

    } catch (err) {

    }
}