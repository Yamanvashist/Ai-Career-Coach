import { Router } from "express"
import { verifyUser } from "../middlewares/verifyUser.ts"

const interviewRouter = Router()

interviewRouter.post("/", verifyUser,)

export default interviewRouter