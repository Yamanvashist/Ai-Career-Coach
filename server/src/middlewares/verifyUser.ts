import { Response, NextFunction } from "express";
import { verifyToken } from "../services/generateToken";

export const verifyUser = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.cookies;
    

    if (!token) {
      return res.status(401).json({
        message: "Access denied. Token missing",
      });
    }

    req.user = verifyToken(token);
    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};