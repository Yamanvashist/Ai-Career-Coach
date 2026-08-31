import "express";
import { JwtPayload } from "../Interfaces/jwtPayload";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
