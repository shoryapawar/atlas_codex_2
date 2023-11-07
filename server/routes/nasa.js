import express from "express";
import {apod} from "../controllers/nasa.js"
const router = express.Router();

//routes
router.get("/apod",apod);



export default router;