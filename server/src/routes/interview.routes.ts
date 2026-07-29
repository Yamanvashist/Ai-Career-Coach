import { Router } from "express";
import { verifyUser } from "../middlewares/verifyUser.ts";
import {
  startInterview,
  getInterview,
  submitInterview,
  getInterviewResult,
} from "../controllers/interview.controllers.ts";

const interviewRouter = Router();

interviewRouter.post("/start", verifyUser, startInterview);
interviewRouter.get("/:interviewId", verifyUser, getInterview);
interviewRouter.post("/:interviewId/submit", verifyUser, submitInterview);
interviewRouter.get("/:interviewId/result", verifyUser, getInterviewResult);


export default interviewRouter;
