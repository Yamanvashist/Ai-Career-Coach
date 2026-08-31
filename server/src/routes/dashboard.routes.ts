import express from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import getDashboardData from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", verifyUser, getDashboardData);

export default dashboardRouter;
