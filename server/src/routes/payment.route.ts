import { Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";

const paymentRouter = Router();

paymentRouter.post("/createOrder", verifyUser);

export default paymentRouter;
