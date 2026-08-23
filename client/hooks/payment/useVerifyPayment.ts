import { verifyPayment } from "@/api/payment/verifyPayment";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

const useVerifyPayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: verifyPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paymentHistory"],
      });
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};

export default useVerifyPayment;
