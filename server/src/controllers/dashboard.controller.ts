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

    const [resumes, interviewRecords, codeAnalyses] = await Promise.all([
      prisma.resume.findMany({
        where: {
          userId,
        },
        select: {
          atsScore: true,
          createdAt: true,
          resumeName: true,
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
          status: true,
          category: true,
          difficulty: true,
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
          language: true,
          title: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      }),
    ]);

    const resumeAvg =
      resumes.length === 0
        ? 0
        : Math.round(
            resumes.reduce((sum, item) => sum + item.atsScore, 0) /
              resumes.length,
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


    const activityData =
      resumes.length === 0 &&
      interviewRecords.length === 0 &&
      codeAnalyses.length === 0
        ? []
        : [
            {
              activity: "Resume",
              count: resumes.length,
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

    const skillPerformance =
      resumes.length === 0 &&
      interviewRecords.length === 0 &&
      codeAnalyses.length === 0
        ? []
        : [
            { skill: "Resume", score: resumeAvg },
            { skill: "Interview", score: interviewAvg },
            { skill: "Code Analysis", score: codeAnalysisAvg },
          ];

    //Recent activies

    const recentActivities =
      resumes.length === 0 &&
      interviewRecords.length === 0 &&
      codeAnalyses.length === 0
        ? []
        : [
            ...resumes.map((resume) => ({
              type: "RESUME",
              title: "Uploaded a new resume",
              description: resume.resumeName,
              time: resume.createdAt,
            })),

            ...interviewRecords
              .filter((interview) => interview.status === "COMPLETED")
              .map((interview) => ({
                type: "INTERVIEW",
                title: "Completed a mock interview",
                description: `${interview.category} · ${interview.difficulty.toLowerCase()} difficulty`,
                time: interview.completedAt,
              })),

            ...codeAnalyses.map((code) => ({
              type: "CODE_ANALYSIS",
              title: "Completed a code analysis",
              description: `${code.language} · ${code.title ?? "Code analysis"}`,
              time: code.createdAt,
            })),
          ]
            .sort((a, b) => b.time.getTime() - a.time.getTime())
            .slice(0, 5);

    return res.status(200).json({
      success: true,
      resumeAvg,
      interviewAvg,
      codeAnalysisAvg,
      overallScore,
      skillPerformance,
      activityData,
      recentActivities,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}