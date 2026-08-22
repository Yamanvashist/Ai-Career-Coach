import { useQuery } from "@tanstack/react-query";
import paymentHistory from "@/api/payment/paymentHistory";

const usePaymentHistory = () => {
  return useQuery({
    queryKey: ["paymentHistory"],
    queryFn: paymentHistory,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default usePaymentHistory;
