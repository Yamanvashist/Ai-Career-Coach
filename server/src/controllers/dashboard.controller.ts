import { Request, Response } from "express";
import prisma from "../lib/prisma";

export default async function getDashboardData(req: Request, res: Response) {
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
        select: {
          atsScore: true,
        },
      }),
      prisma.interview.findMany({
        where: {
          userId,
          status: "COMPLETED",
        },
        select: {
          overallScore: true,
        },
      }),
      prisma.codeAnalysis.findMany({
        where: {
          userId,
        },
        select: {
          overallScore: true,
        },
      }),
    ]);

    const resumeAvg =
      resume.length === 0
        ? 0
        : Math.round(
            resume.reduce((sum, item) => sum + item.atsScore, 0) /
              resume.length,
          );

    const interviewScores = interviewRecords
      .map((item) => item.overallScore)
      .filter((score): score is number => score !== null);

    const interviewAvg =
      interviewScores.length === 0
        ? 0
        : Math.round(
            interviewScores.reduce((sum, score) => sum + score, 0) /
              interviewScores.length,
          );

    const codeAnalysisScores = codeAnalyses
      .map((item) => item.overallScore)
      .filter((score): score is number => score !== null);

    const codeAnalysisAvg =
      codeAnalysisScores.length === 0
        ? 0
        : Math.round(
            codeAnalysisScores.reduce((sum, score) => sum + score, 0) /
              codeAnalysisScores.length,
          );

    const overallScore = Math.round(
      (resumeAvg + interviewAvg + codeAnalysisAvg) / 3,
    );

    // activity destribution

    const activityDistribution = {
      resume: resume.length,
      interview: interviewRecords.length,
      codeAnalysis: codeAnalyses.length,
    };

    // performance trend

    

    return res.status(200).json({
      success: true,
      resumeAvg,
      interviewAvg,
      codeAnalysisAvg,
      overallScore,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
