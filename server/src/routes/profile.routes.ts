import { Router } from "express";
import { upsertProfile, getProfile } from "../controllers/profile.controllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const profileRouter = Router();

profileRouter.patch("/", verifyUser, upsertProfile);
profileRouter.get("/", verifyUser, getProfile);

export default profileRouter;
