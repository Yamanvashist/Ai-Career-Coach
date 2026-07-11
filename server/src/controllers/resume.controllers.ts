import { Request, Response } from "express";
import { parsePdf } from "../lib/pdfParse";
import { buildResumePrompt } from "../AiPrompt/prompt";
import { analyze } from "../lib/GenAi";

export const resumeAnalyze = async (req: Request, res: Response) => {
  try {
    const pdf = req.file;
    const { targetRole } = req.body;
    if (!pdf || !pdf.path) {
      return res.status(400).json({ error: "No resume file uploaded" });
    }

    if (!targetRole) return res.status(400).json({ message: "Target Role field is empty" });

    const resumeText = await parsePdf(pdf.path);

    const resumePrompt = buildResumePrompt(resumeText, targetRole);

    const text = await analyze(resumePrompt)
    const resume = JSON.parse(text || "")


    return res.json({ resume });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Server error", err })
  }
};
