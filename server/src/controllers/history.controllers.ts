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

    const [resume, interviewRecords, codeAnalyses] = await Promise.all([
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

    const combineAll = [...resume, ...interviewRecords, ...codeAnalyses];

    const history = combineAll.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );

    return res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default getHistory;
