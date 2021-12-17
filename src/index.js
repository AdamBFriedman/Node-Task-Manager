const express = require("express");
// This ensures that mongoose runs
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (request, response) => {
  const user = new User(request.body);

  user
    .save()
    .then(() => {
      response.status(201).send(user);
    })
    .catch((error) => {
      response.status(400).send(error);
    });
});

app.post("/tasks", (request, response) => {
  const task = new Task(request.body);

  task
    .save()
    .then(() => {
      response.status(201).send(task);
    })
    .catch((error) => {
      response.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});