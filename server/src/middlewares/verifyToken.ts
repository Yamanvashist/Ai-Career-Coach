import { Request, Response, NextFunction } from "express";
import { verifyToken as verifyTokenService } from "../services/generateToken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req.cookies;
    if (!token)
      return res.status(400).json({ message: "Access denied. Token missing" });

    const decode = await verifyTokenService(token);
    (req as any).user = decode;
    return next();
  } catch (err: any) {
    return res.status(401).json({ message: err.message || "Invalid token" });
  }
};
