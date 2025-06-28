import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {suggestRouter} from "./routes/suggest.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/suggest", suggestRouter);

module.exports = app;
