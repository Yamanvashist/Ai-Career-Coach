import {Router} from "express"
import { analyzeCode } from "../controllers/codeAnalysis.controller.ts"
import { verifyUser } from "../middlewares/verifyUser.ts"

const codeRouter = Router()

codeRouter.post("/",verifyUser,analyzeCode)

export default codeRouter