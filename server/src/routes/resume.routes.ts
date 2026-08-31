import express, { Router, RequestHandler } from "express";
import { upload } from "../lib/multer.js";
import { resumeAnalyze } from "../controllers/resume.controllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const resumeRouter = Router();

resumeRouter.post(
  "/resumeAnalyze",
  verifyUser,
  upload.single("resume"),
  resumeAnalyze,
);

export default resumeRouter;
