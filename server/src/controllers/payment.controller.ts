import razorpay from "../lib/razorpay";
import { Request, Response } from "express";

async function createOrder(req: Request, res: Response) {
  try {
    const { amount, Subscription } = req.body;

    if (!amount)
      return res
        .status(400)
        .json({ success: false, message: "Subscription not found" });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        description: Subscription ?? "Premium Subscription",
      },
    };

    const order = await razorpay.orders.create(options);
    console.log("Order Created Successfully:", order);

    return res
      .status(200)
      .json({ order, message: "Order created successfully", success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export default createOrder;
