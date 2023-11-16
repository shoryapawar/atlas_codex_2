import express from "express";
import { config } from "dotenv";
import cors from "cors";
import nasaroutes from "./routes/nasa.js"
import router from "./routes/quiz_routes.js";



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
app.use("/api/quiz" , router);

//home route
app.get("/", (req, res) => {
  res.send("Hey I'm working");
});
