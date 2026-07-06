import express from "express";
import { verifyToken } from "../services/generateToken.js";
import {
  register,
  login,
  checkAuth,
  signOut,
} from "../controllers/auth.controllers.js";

const userRouter = express.Router();

userRouter.post("/sign-in", login);
userRouter.post("/sign-up", register);
userRouter.post("/sign-out", verifyToken, signOut);
userRouter.get("/checkAuth", verifyToken, checkAuth);

export default userRouter;