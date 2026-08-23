import api from "../api";

interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export const verifyPayment = async (payload: VerifyPaymentPayload) => {
  const { data } = await api.post("/payment/verify", payload);

  return data;
};