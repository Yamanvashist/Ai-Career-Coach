import { Request, Response } from "express";
import prisma from "../lib/prisma";

export default async function getDashboardData(req: Request, res: Response) {
  try {
    const userId = req.user?.userId;

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
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.interview.findMany({
        where: {
          userId,
          status: "COMPLETED",
        },
        select: {
          overallScore: true,
          completedAt: true,
        },
        orderBy: {
          completedAt: "asc",
        },
      }),
      prisma.codeAnalysis.findMany({
        where: {
          userId,
        },
        select: {
          overallScore: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
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

    // activity Data

    const activityData = [
      {
        activity: "Resume",
        count: resume.length,
      },
      {
        activity: "Interview",
        count: interviewRecords.length,
      },
      {
        activity: "Code Analysis",
        count: codeAnalyses.length,
      },
    ];

    //skill performance

    const skillPerformance = [
      { skill: "Resume", score: resumeAvg },
      { skill: "Interview", score: interviewAvg },
      { skill: "Code Analysis", score: codeAnalysisAvg },
    ];

    return res.status(200).json({
      success: true,
      resumeAvg,
      interviewAvg,
      codeAnalysisAvg,
      overallScore,
      skillPerformance,
      activityData
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
