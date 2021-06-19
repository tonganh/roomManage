import express, { Response, Request } from "express";
export const app = express();
import cors from "cors";
app.use(cors);
app.use(express.json());
