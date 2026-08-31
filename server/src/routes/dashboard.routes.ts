import express from "express";
import { verifyUser } from "../middlewares/verifyUser";
import getDashboardData from "../controllers/dashboard.controller";

const dashboardRouter = express.Router();

dashboardRouter.get("/", verifyUser, getDashboardData);

export default dashboardRouter;
