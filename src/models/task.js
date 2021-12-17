const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Middleware
// taskSchema.pre("save", async function (next) {
//   const task = this;

//   console.log('')

//   next();
// });

// Create Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
