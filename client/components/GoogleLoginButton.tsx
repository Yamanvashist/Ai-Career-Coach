"use client";

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { toast } from "sonner";

export const GoogleLoginButton = () => {
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