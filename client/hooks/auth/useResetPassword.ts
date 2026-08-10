import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Props {
    token: string;
    password: string;
}

const useResetPassword = (setErrorMessage: (msg: string) => void) => {
    const router = useRouter();

    return useMutation({
        mutationFn: ({ token, password }: Props) => resetPassword(token, password),
        onSuccess: () => {
            router.push("/sign-in");
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                setErrorMessage(
                    error.response?.data.message ?? "Failed to reset password",
                );
            } else {
                setErrorMessage("Something went wrong");
            }
        },
    });
};

export default useResetPassword;
