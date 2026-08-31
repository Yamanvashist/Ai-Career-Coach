import razorpay from "../lib/razorpay.js";
import { Request, Response } from "express";
import * as crypto from "crypto";
import prisma from "../lib/prisma.js";

export async function createOrder(req: Request, res: Response) {
  try {
    const { amount, subscription } = req.body;
    const Amount = Number(amount);

    const userId = req.user?.userId;

    if (!userId)
      return res
        .status(401)
        .json({ message: "Unauthorized User", success: false });

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount not found",
      });
    }

    const options = {
      amount: Amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        description: subscription ?? "Unknown Subscription",
      },
    };

    const order = await razorpay.orders.create(options);

    const payment = await prisma.payment.create({
      data: {
        userId,
        razorpayOrderId: order.id,
        amount: Number(order.amount)/100,
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

    const payment = await prisma.payment.update({
      where: {
        razorpayOrderId: razorpay_order_id,
      },
      data: {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "SUCCESS",
      },
    });

    let creditsToAdd = 0;

    switch (payment.type) {
      case "100 Credits":
        creditsToAdd = 100;
        break;

      case "250 Credits":
        creditsToAdd = 250;
        break;

      case "500 Credits":
        creditsToAdd = 500;
        break;

      case "Pro Monthly Subscription":
        creditsToAdd = 300;
        break;

      case "Ultimate Monthly Subscription":
        creditsToAdd = 1000;
        break;
    }

    await prisma.user.update({
      where: {
        id: payment.userId,
      },
      data: {
        credits: { increment: creditsToAdd },
      },
    });

    return res.status(200).json({ success: true, message: "Payment verified" });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function paymentHistory(req: Request, res: Response) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized User",
        success: false,
      });
    }

    const payments = await prisma.payment.findMany({
      where: {
        userId,
      },
      select: {
        type: true,
        createdAt: true,
        amount: true,
        status: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return res.status(200).json({
      success: true,
      message: "Payment history fetched",
      paymentHistory: payments,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}