import jwt, { JwtPayload } from "jsonwebtoken";
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

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
};
