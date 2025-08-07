import serverless from "serverless-http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/notes", notesRoutes);

// Connect to DB once
connectDB();

// Export app wrapped in serverless
export const handler = serverless(app, {
  request: function (req, event, context) {
    if (event.body && typeof event.body === "string") {
      try {
        req.body = JSON.parse(req.body);
      } catch (error) {
        req.body = {};
      }
    }
  },
});
