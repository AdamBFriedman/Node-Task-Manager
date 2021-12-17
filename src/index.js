const express = require("express");
// This ensures that mongoose runs
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create user
app.post("/users", async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    response.status(201).send(user);
  } catch (error) {
    response.status(400).send(error);
  }
});

// Fetch all users
app.get("/users", async (request, response) => {
  try {
    const users = await User.find({});
    response.status(201).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Fetch one user
app.get("/users/:id", async (request, response) => {
  const _id = request.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return response.status(404).send();
    }
    response.status(201).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Update user
app.patch("/users/:id", async (request, response) => {
  const updates = Object.keys(request.body);
  const allowedUpdates = ["name", "email", "password", "age"];
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
    const user = await User.findByIdAndUpdate(_id, _body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return response.status(404).send();
    }

    response.status(201).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Delete user
app.delete("/users/:id", async (request, response) => {
  const _id = request.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return response.status(404).send();
    }
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Create task
app.post("/tasks", async (request, response) => {
  const task = new Task(request.body);

  try {
    await task.save();
    response.status(201).send(task);
  } catch (error) {
    response.status(400).send(error);
  }
});

// Fetch all tasks
app.get("/tasks", async (request, response) => {
  try {
    const tasks = await Task.find({});
    response.status(201).send(tasks);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Fetch one task
app.get("/tasks/:id", async (request, response) => {
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
app.patch("/tasks/:id", async (request, response) => {
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
app.delete("/tasks/:id", async (request, response) => {
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

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
