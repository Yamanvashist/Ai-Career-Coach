import { accountDelete } from "@/api/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useDeleteAccount = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: accountDelete,
    onSuccess: (data) => {
      toast.success(data.message ?? "Account deleted");
      router.push("/sign-in");
    },
    onError: (data) => {
      toast.error(data.message ?? "Failed to delete the account");
    },
  });
};

export default useDeleteAccount;
