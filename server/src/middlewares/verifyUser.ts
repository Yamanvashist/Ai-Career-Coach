import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/generateToken";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Access denied. Token missing",
      });
    }

    req.user = verifyToken(token);

    setTimeout(()=>{
       next();
    },5000)
   
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
