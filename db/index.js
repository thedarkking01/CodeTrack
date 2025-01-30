import mongoose from "mongoose";
import express from "express";
import { Code } from "./models/Code.js"; // Adjust the path as needed
import cors from "cors";
const app = express();
mongoose.connect(
    // "mongodb+srv://harshalguptadev:harshal10@clusteride.cszbp.mongodb.net"
    // "mongodb+srv://sourabhsinghbais52:ppVijAwmjNBOwOO9@clustercodeeditor.qh9og.mongodb.net"
    "mongodb+srv://sourabhsinghbais52:ppVijAwmjNBOwOO9@codeeditor-cluster.qh9og.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.use(cors());

app.use(express.json());
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.post("/api/save-code", async (req, res) => {
  const { language, code, problemName } = req.body;

  if (!language || !code || !problemName) {
    return res.status(400).json({ message: "Language, code, and problem name are required" });
  }
  
  try {
    const newCode = new Code({ language, code, problemName });
    await newCode.save();
    res.status(201).json({ message: "Code saved successfully" });
  } catch (err) {
    console.error("Error saving code:", err);
    res.status(500).json({ message: "Failed to save code" });
  }
});
app.listen(5000, () => console.log("Server running on http://localhost:5000"));