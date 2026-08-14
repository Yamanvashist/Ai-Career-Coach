import { Request, Response } from "express";
import { textToSpeech } from "../lib/elevenlabs";

export const generateSpeech = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        message: "Text is required",
      });
    }

    const audioStream = await textToSpeech(text);

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-store");

    for await (const chunk of audioStream) {
      res.write(chunk);
    }

    res.end();
  } catch (err) {
    console.error("TTS Error:", err);

    return res.status(500).json({
      message: "Failed to generate speech",
    });
  }
};
