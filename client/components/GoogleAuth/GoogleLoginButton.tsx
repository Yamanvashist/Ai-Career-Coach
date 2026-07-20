"use client";

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

export const GoogleLoginButton = () => {

    const router = useRouter()

    const handleSuccess = async (credentialResponse: CredentialResponse | null) => {
        try {
            if (!credentialResponse?.credential) return;

            const { data } = await axios.post(
                "http://localhost:4000/api/user/google",
                {
                    credential: credentialResponse.credential,
                },
                {
                    withCredentials: true,
                }
            );

            console.log(data);
            router.push("/dashboard")
            toast.success("Logged in successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Google login failed.");
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
                toast.error("Google Login Failed");
            }}
        />
    );
};