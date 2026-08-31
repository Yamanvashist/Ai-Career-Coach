import "express";
import { JwtPayload } from "../Interfaces/jwtPayload.js";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
