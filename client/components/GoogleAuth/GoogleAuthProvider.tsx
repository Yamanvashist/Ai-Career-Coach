import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GoogleAuthProvider = ({ children }: Props) => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    throw new Error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing");
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;