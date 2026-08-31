import { Router } from "express";
import getHistory from "../controllers/history.controllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const historyRouter = Router();

historyRouter.get("/", verifyUser, getHistory);

export default historyRouter;
