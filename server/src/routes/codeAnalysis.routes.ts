import { Router } from "express";
import { analyzeCode } from "../controllers/codeAnalysis.controller";
import { verifyUser } from "../middlewares/verifyUser";

const codeRouter = Router();

codeRouter.post("/", verifyUser, analyzeCode);

export default codeRouter;
