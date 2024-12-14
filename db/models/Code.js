import mongoose from "mongoose";

// Define the schema
const CodeSchema = new mongoose.Schema({
  language: { type: String, required: true },
  code: { type: String, required: true },
  problemName: { type: String, required: true }, // Problem name field
  createdAt: { type: Date, default: Date.now }, // Corrected timestamp
});

export const Code = mongoose.model("SaveCode", CodeSchema);