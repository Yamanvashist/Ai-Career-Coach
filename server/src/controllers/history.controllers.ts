import { Request, Response } from "express";
import prisma from "../lib/prisma";

const getHistory = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized User",
      });
    }

    const [resumes, interviews, codeAnalyses] = await Promise.all([
      prisma.resume.findMany({
        where: {
          userId,
        },
      }),

      prisma.interview.findMany({
        where: {
          userId,
        },
      }),

      prisma.codeAnalysis.findMany({
        where: {
          userId,
        },
      }),
    ]);

    const history = [
      ...resumes.map((item) => ({
        id: item.id,
        type: "RESUME",
        title: item.resumeName,
        description: item.targetRole,
        score: item.atsScore,
        createdAt: item.createdAt,
      })),

      ...interviews.map((item) => ({
        id: item.id,
        type: "INTERVIEW",
        title: item.category,
        description: `${item.difficulty} level interview`,
        score: item.overallScore,
        status: item.status,
        createdAt: item.createdAt,
      })),

      ...codeAnalyses.map((item) => ({
        id: item.id,
        type: "CODE_ANALYSIS",
        title: item.title ?? "Code Analysis",
        description: `${item.language} code review`,
        score: item.overallScore,
        complexity: item.complexity,
        createdAt: item.createdAt,
      })),
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    console.error("History Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default getHistory;
