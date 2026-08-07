"use client";

import createOrder from "@/api/payment/createOrder";
import { useMutation } from "@tanstack/react-query";

const useCreateOrder = () => {
  return useMutation({
    mutationFn: ({
      amount,
      subscription,
    }: {
      amount: number;
      subscription: string;
    }) => createOrder(amount, subscription),
  });
};

export default useCreateOrder;
