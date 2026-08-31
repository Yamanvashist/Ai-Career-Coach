import express from "express";
import { verifyUser } from "../middlewares/verifyUser";

import {
  register,
  login,
  checkAuth,
  signOut,
  updatePassword,
  deleteAccount,
  googleLogin,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controllers.js";

const userRouter = express.Router();

userRouter.post("/sign-in", login);
userRouter.post("/sign-up", register);
userRouter.post("/google", googleLogin);
userRouter.delete("/delete", verifyUser, deleteAccount);

userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/resetPassword", resetPassword);

userRouter.post("/sign-out", verifyUser, signOut);

userRouter.patch("/password", verifyUser, updatePassword);

userRouter.get("/checkAuth", verifyUser, checkAuth);

export default userRouter;
