import { Router } from "express";
import { analyzeCode } from "../controllers/codeAnalysis.controller.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const codeRouter = Router();

codeRouter.post("/", verifyUser, analyzeCode);

export default codeRouter;
