import { Router } from "express";
import { generateSpeech } from "../controllers/tts.controller";

const ttsRouter = Router();

ttsRouter.post("/", generateSpeech);

export default ttsRouter;
