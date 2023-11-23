import express from "express";
import { config } from "dotenv";
import cors from "cors";
import nasaroutes from "./routes/nasa.js"
import router from "./routes/quiz_routes.js";
import lessonRoute from "./routes/lesson_routes.js";



export const app = express();

config({
  path: "./data/config.env",
});

//middlewares
app.use(express.json());



//--------CORS--------
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



//routes
app.use("/api/nasa",nasaroutes);
app.use("/api/quiz" , router);
app.use("/api/lesson" , lessonRoute);

//home route
app.get("/", (req, res) => {
  res.send("Hey I'm working");
});
