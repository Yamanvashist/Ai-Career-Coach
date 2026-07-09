import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials : true
  }),
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started sucessfully");
});

app.use("/api/user", userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server started on port:", port));
