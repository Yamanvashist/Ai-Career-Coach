import express, { Router } from "express"
import { upload } from "../lib/multer"
import { resumeAnalyze } from "../controllers/resume.controllers"

const resumeRouter = Router()

resumeRouter.post("/resumeAnalyze",upload.single("resume"),resumeAnalyze)

export default resumeRouter