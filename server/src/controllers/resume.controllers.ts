import { Request, Response } from "express";
import { parsePdf } from "../lib/pdfParse";
import { buildResumePrompt } from "../AiPrompt/prompt";
import { analyze } from "../lib/GenAi";

export const resumeAnalyze = async (req: Request, res: Response) => {
  const resume = req.file;
  console.log(resume)
  const { targetRole } = req.body;
  if (!resume || !resume.path) {
    return res.status(400).json({ error: "No resume file uploaded" });
  }

  if (!targetRole) return res.status(400).json({ message: "Target Role field is empty" });

  const resumeText = await parsePdf(resume.path);

  const resumePrompt = buildResumePrompt(resumeText, targetRole);

  const text = await analyze(resumePrompt)


  return res.json({ text, resumeText });
};
