"use client";

import createOrder from "@/api/payment/createOrder";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      amount,
      subscription,
    }: {
      amount: number;
      subscription: string;
    }) => createOrder(amount, subscription),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paymentHistory"],
      });
    },
  });
};

export default useCreateOrder;
