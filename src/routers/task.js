const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

// Create task
router.post("/tasks", async (request, response) => {
  const task = new Task(request.body);

  try {
    await task.save();
    response.status(201).send(task);
  } catch (error) {
    response.status(400).send(error);
  }
});

// Fetch all tasks
router.get("/tasks", async (request, response) => {
  try {
    const tasks = await Task.find({});
    response.status(201).send(tasks);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Fetch one task
router.get("/tasks/:id", async (request, response) => {
  const _id = request.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return response.status(404).send();
    }
    response.status(201).send(task);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Update task
router.patch("/tasks/:id", async (request, response) => {
  const updates = Object.keys(request.body);
  const allowedUpdates = ["description", "isCompleted"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return response
      .status(400)
      .send({ Error: "One of your arguments is not correct." });
  }
  const _id = request.params.id;
  const _body = request.body;

  try {
    const task = await Task.findByIdAndUpdate(_id, _body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return response.status(404).send();
    }

    response.status(201).send(task);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Delete task
router.delete("/tasks/:id", async (request, response) => {
  const _id = request.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return response.status(404).send();
    }
    response.send(task);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
