import Task from "../models/Task.js";
import Worker from "../models/Worker.js";

export const assignTask = async (req, res) => {
  try {
    const { name, description, skill, priority } = req.body;

    console.log("🟢 Request received:", req.body);
    console.log("🟢 Searching for workers with skill:", skill);

    // Find available worker with the required skill
    const worker = await Worker.findOne({ skill, availability: true });

    if (!worker) {
      console.log("❌ No available worker found with skill:", skill);
      return res
        .status(404)
        .json({ message: `No available worker found with skill: ${skill}` });
    }

    // Create a new task
    const task = await Task.create({
      name,
      description,
      skill,
      priority,
      assignedTo: worker._id,
    });

    // Update worker availability
    worker.availability = false;
    await worker.save();

    console.log(`✅ Task assigned to ${worker.name}`);
    res.json({ message: `Task assigned to ${worker.name}`, task });
  } catch (error) {
    console.error("❌ Error assigning task:", error.message);
    res
      .status(500)
      .json({ message: "Error assigning task", error: error.message });
  }
};
