import express, { Router, RequestHandler } from "express"
import { upload } from "../lib/multer"
import { resumeAnalyze } from "../controllers/resume.controllers"
import { verifyUser } from "../middlewares/verifyUser"

const resumeRouter = Router()

resumeRouter.post("/resumeAnalyze", verifyUser, upload.single("resume"), resumeAnalyze)

export default resumeRouter