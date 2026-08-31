import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/generateToken.js";
import { JwtPayload } from "../Interfaces/jwtPayload.js";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Access denied. Token missing",
      });
    }

    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
