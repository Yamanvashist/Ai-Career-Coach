import { Router } from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import {
  createOrder,
  paymentHistory,
  verifyPayment,
} from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter.post("/createOrder", verifyUser, createOrder);
paymentRouter.post("/verify", verifyUser, verifyPayment);
paymentRouter.get("/paymentHistory", verifyUser, paymentHistory);

export default paymentRouter;
