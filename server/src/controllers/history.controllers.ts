import { Request, Response } from "express";
import prisma from "../lib/prisma";

interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

const getHistory = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User" });
    }

    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.max(1, parseInt(req.query.limit as string) || 1);
    const skip = (page - 1) * limit;

    const [resumes, interviews, codeAnalyses] = await Promise.all([
      prisma.resume.findMany({ where: { userId } }),
      prisma.interview.findMany({ where: { userId } }),
      prisma.codeAnalysis.findMany({ where: { userId } }),
    ]);

    const fullHistory = [
      ...resumes.map((item) => ({
        id: item.id,
        type: "RESUME" as const,
        title: item.resumeName,
        description: item.targetRole,
        status: "COMPLETED" as const,
        score: item.atsScore,
        createdAt: item.createdAt,
      })),
      ...interviews.map((item) => ({
        id: item.id,
        type: "INTERVIEW" as const,
        title: item.category,
        description: `${item.difficulty} level interview`,
        score: item.overallScore,
        status: item.status,
        createdAt: item.createdAt,
      })),
      ...codeAnalyses.map((item) => ({
        id: item.id,
        type: "CODE_ANALYSIS" as const,
        title: item.title ?? "Code Analysis",
        description: `${item.language} code review`,
        score: item.overallScore,
        status: "COMPLETED" as const,
        createdAt: item.createdAt,
      })),
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    const totalItems = fullHistory.length;
    const totalPages = Math.ceil(totalItems / limit);
    const history = fullHistory.slice(skip, skip + limit);

    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return res.status(200).json({
      success: true,
      history,
      pagination: { totalItems,currentPage : page, totalPages, hasNextPage, hasPrevPage },
    });
  } catch (error) {
    console.error("[getHistory Error]:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export default getHistory;
