import razorpay from "../lib/razorpay";
import { Request, Response } from "express";
import * as crypto from "crypto";
import prisma from "../lib/prisma";

export async function createOrder(req: Request, res: Response) {
  try {
    const { amount, subscription } = req.body;

    const userId = (req as any).user.userId;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount not found",
      });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        description: subscription ?? "Unknown Subscription",
      },
    };

    const order = await razorpay.orders.create(options);

    console.log("Order Created Successfully:", order);

    const payment = await prisma.payment.create({
      data: {
        userId,
        razorpayOrderId: order.id,
        amount: order.amount,
        currency: order.currency,
        type: subscription,
        status: "PENDING",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Order created successfully",
      order,
      payment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function verifyPayment(req: Request, res: Response) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", String(process.env.RAZORPAY_KEY_SECRET))
      .update(body)
      .digest("hex");

    const isValid = expectedSignature === razorpay_signature;

    if (!isValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }

    return res.status(200).json({ success: true, message: "Payment verified" });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
