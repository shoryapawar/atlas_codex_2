import express from "express";
import { config } from "dotenv";
import cors from "cors";
import nasaroutes from "./routes/nasa.js"

export const app = express();

config({
  path: "./data/config.env",
});

//middlewares
app.use(express.json());



//--------CORS--------
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//routes
app.use("/api/nasa",nasaroutes);

//home route
app.get("/", (req, res) => {
  res.send("Hey I'm working");
});
