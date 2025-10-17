import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  availability: { type: Boolean, required: true },
});

export default mongoose.model("Worker", workerSchema);
