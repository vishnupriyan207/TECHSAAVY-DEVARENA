import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // Make sure this path is correct
import taskRoutes from "./routes/taskRoutes.js"; // Your task routes

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route to check if backend works
app.get("/", (req, res) => {
  res.send("✅ API is working");
});

// Routes
app.use("/api/tasks", taskRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
