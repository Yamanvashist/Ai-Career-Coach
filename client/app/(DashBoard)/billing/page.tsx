"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import useCreateOrder from "@/hooks/payment/useCreateOrder";
import usePaymentHistory from "@/hooks/payment/usePaymentHistory";
import useVerifyPayment from "@/hooks/payment/useVerifyPayment";

import { loadRazorPayScript } from "@/components/payment/Payment";
import api from "@/api/api";

import { BillingHeader } from "@/components/billing/BillingHeader";
import { CurrentPlanCard } from "@/components/billing/CurrentPlanCard";
import { CreditPacks } from "@/components/billing/CreditPacks";
import { SubscriptionPlans } from "@/components/billing/SubscriptionPlans";
import { PaymentHistory } from "@/components/billing/PaymentHistory";

export default function BillingPage() {
  const { data: user } = useCurrentUser();
  const credits = user?.credits ?? 0;

  const { data} = usePaymentHistory();
  const { mutateAsync: verifyPaymentMutation } = useVerifyPayment();

  const { paymentHistory } = data ?? {};

  const { mutateAsync: createOrder, isPending } = useCreateOrder();

  const handlePayment = async (amount: number, subscription: string) => {
    const isLoaded = await loadRazorPayScript();
    if (!isLoaded) return;

    const { order } = await createOrder({
      amount,
      subscription,
    });

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "Ai Career Coach",
      description: "Premium",

      handler: async function (response: any) {
        await verifyPaymentMutation({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        <BillingHeader />
        <CurrentPlanCard credits={credits} />
        <CreditPacks isLoading={isPending} onBuy={handlePayment} />
        <SubscriptionPlans isLoading={isPending} onSubscribe={handlePayment} />
        <PaymentHistory history={paymentHistory ?? []} />
      </div>
    </div>
  );
}
