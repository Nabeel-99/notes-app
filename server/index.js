import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./db.js";
dotenv.config();
const app = express();
//
app.use(express.json());
app.use(cors());

// routes
app.use("/api/notes", notesRoutes);

// connect DB
connectDB();

// listen to port
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
