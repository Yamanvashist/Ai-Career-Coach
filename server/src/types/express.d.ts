declare namespace Express {
  interface Request {
    user?: import("../Interfaces/jwtPayload").JwtPayload;
  }
}
