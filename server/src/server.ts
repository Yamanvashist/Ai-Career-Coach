import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started sucessfully");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server started on port:", port));
