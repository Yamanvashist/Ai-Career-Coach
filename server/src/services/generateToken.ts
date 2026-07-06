import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = async (userId: number): Promise<string> => {
  const payload = { userId };
  const secret = process.env.JWT_SECRET as string;
  if (!secret) throw new Error("Jwt secret is not defined");

  const token = jwt.sign(payload, secret, {
    expiresIn: "3d",
  });
  return token;
};

export default generateToken;

export const verifyToken = async (token: string): Promise<boolean> => {
    try {
      jwt.verify(token, process.env.JWT_SECRET as string);
      return true;
    } catch {
      return false;
    }
  };
