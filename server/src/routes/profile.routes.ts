import { Router } from "express";
import { upsertProfile, getProfile } from "../controllers/profile.controllers";
import { verifyUser } from "../middlewares/verifyUser";

const profileRouter = Router()

profileRouter.patch("/", verifyUser, upsertProfile)
profileRouter.get("/", verifyUser, getProfile)

export default profileRouter