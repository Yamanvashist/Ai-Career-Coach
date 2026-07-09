import express from "express";
import { verifyUser } from "../middlewares/verifyUser.js";

import {
  register,
  login,
  checkAuth,
  signOut,
} from "../controllers/auth.controllers.js";

const userRouter = express.Router();

userRouter.post("/sign-in", login);
userRouter.post("/sign-up", register);
userRouter.post("/sign-out", verifyUser, signOut);
userRouter.get("/checkAuth", verifyUser, checkAuth);

export default userRouter;