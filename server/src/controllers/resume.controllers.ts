import { Request, Response } from "express";
import { parsePdf } from "../lib/pdfParse";
import { buildResumePrompt } from "../AiPrompt/ResumePrompt";
import { analyze } from "../lib/GenAi";
import prisma from "../lib/prisma";
import Multer from "multer"

interface MulterRequest extends Request {
  file: Express.Multer.File;
}

export const resumeAnalyze = async (req: MulterRequest, res: Response) => {
  try {
    const pdf = req.file
    const { targetRole } = req.body;

    const userId = (req as any).user?.userId;

    if (!pdf || !pdf.path) {
      return res.status(400).json({ error: "No resume file uploaded" });
    }
    if (!targetRole) {
      return res.status(400).json({ message: "Target Role field is empty" });
    }
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const resumeText = await parsePdf(pdf.path);
    const resumePrompt = buildResumePrompt(resumeText, targetRole);

    const text = await analyze(resumePrompt);
    const aiData = JSON.parse(text || "{}");
    console.log(aiData)

    const resume = await prisma.resume.create({
      data: {
        resumeName: pdf.originalname || "My Resume",
        targetRole: targetRole,
        atsScore: aiData.atsScore || 0,
        conclusion: aiData.conclusion || "No conclusion provided.",
        skills: aiData.scores.skills || 0,
        projects: aiData.scores.projects || 0,
        experience: aiData.scores.experience || 0,
        formatting: aiData.scores.formatting || 0,
        strengths: aiData.strengths || [],
        improvements: aiData.improvements || [],
        userId: userId,
      },
    });

    return res.json({ resume });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", err });
  }
};