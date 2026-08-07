import { Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";
import { createOrder, verifyPayment } from "../controllers/payment.controller";

const paymentRouter = Router();

paymentRouter.post("/createOrder", verifyUser, createOrder);
paymentRouter.post("/verify", verifyUser, verifyPayment);

export default paymentRouter;
