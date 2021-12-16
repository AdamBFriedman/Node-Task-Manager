const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
});

// Create User model
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Value must be a positive number.");
      }
    },
  },
});

// Instantiate new User
const adam = new User({
  name: "Adam",
  age: 36,
});

// Save Adam to database
adam
  .save()
  .then(() => {
    console.log(adam);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// Create Task model
const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
  },
});

// Instantiate new Task
const task1 = new Task({
  description: "Task 1",
  isCompleted: false,
});

// Save Task 1 to database
// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
