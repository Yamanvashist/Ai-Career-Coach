import prisma from "../lib/prisma";
import { Request, Response } from "express";
import CodeAnalysisPrompt from "../AiPrompt/CodeAnalysisPrompt";
import { analyze } from "../lib/GenAi";
import { CodeAnalysisResponse, userInput } from "../../Interfaces/codeInterface";

export const analyzeCode = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?.userId;
        const { code, language } = req.body as userInput;

        if (!code?.trim()) {
            return res.status(400).json({
                message: "Code field is empty",
            });
        }

        if (!language) {
            return res.status(400).json({
                message: "Select a language",
            });
        }

        const prompt = CodeAnalysisPrompt(code, language);

        const startTime = Date.now()

        const response = await analyze(prompt);

        const analysisDuration = Date.now() - startTime

        if (!response) {
            return res.status(500).json({
                message: "Failed to analyze code",
            });
        }

        let result: CodeAnalysisResponse;

        try {
            result = JSON.parse(response) as CodeAnalysisResponse;
        } catch {
            return res.status(500).json({
                message: "AI returned invalid JSON",
            });
        }

        const codeAnalysis = await prisma.codeAnalysis.create({
            data: {
                title: result.title,
                language,
                code,

                summary: result.summary,
                overallScore: result.overallScore,

                correctness: result.correctness,
                performance: result.performance,
                readability: result.readability,
                maintainability: result.maintainability,
                bestPractices: result.bestPractices,

                linesOfCode: result.linesOfCode,
                complexity: result.complexity,

                issues: result.issues,
                improvements: result.improvements,

                optimizedCode: result.optimizedCode,

                userId,
            },
        });

        const totalCredits = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                credits: true
            }
        })

        if (!totalCredits) return res.status(404).json({ message: "User not found" });
        if (totalCredits.credits < 1) return res.status(402).json({ message: "Credits are insufficient" });


        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                credits: { decrement: 1 }
            }
        })

        return res.status(201).json({
            message: "Analysis completed",
            analysis: codeAnalysis,
            analysisDuration,
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Server Error",
        });
    }
};