import express from "express";
import { verifyUser } from "../middlewares/verifyUser.ts";
import getDashboardData from "../controllers/dashboard.controller.ts";

const dashboardRouter = express.Router();

dashboardRouter.get("/", verifyUser, getDashboardData);

export default dashboardRouter;
