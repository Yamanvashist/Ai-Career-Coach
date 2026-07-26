import { Router } from "express"
import { verifyUser } from "../middlewares/verifyUser.ts"
import { startInterview } from "../controllers/interview.controllers.ts"

const interviewRouter = Router()

interviewRouter.post("/start", verifyUser ,startInterview)

export default interviewRouter