import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js"
import profileRouter from "./routes/profile.routes.js";
import codeRouter from "./routes/codeAnalysis.routes.js";
import interviewRouter from "./routes/interview.routes.js";
import ttsRouter from "./routes/tts.routes.js";


const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  }),
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started sucessfully");
});

app.use("/api/user", userRouter);
app.use("/api/resume", resumeRouter)
app.use("/api/profile", profileRouter)
app.use("/api/codeAnalysis", codeRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/tts", ttsRouter);


const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server started on port:", port));
