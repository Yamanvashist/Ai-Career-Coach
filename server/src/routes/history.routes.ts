import { Router } from "express";
import getHistory from "../controllers/history.controllers";
import { verifyUser } from "../middlewares/verifyUser";

const historyRouter = Router()

historyRouter.get("/",verifyUser,getHistory)



export default historyRouter;