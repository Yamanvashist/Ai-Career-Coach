import { Router } from "express"
import { verifyUser } from "../middlewares/verifyUser.ts"
import { startInterview, getInterview } from "../controllers/interview.controllers.ts"

const interviewRouter = Router()

interviewRouter.post("/start", verifyUser, startInterview)
interviewRouter.get("/:interviewId", verifyUser, getInterview)


export default interviewRouter