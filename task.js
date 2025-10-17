import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  skill: String,
  priority: String,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
  },
});

export default mongoose.model("Task", taskSchema);
