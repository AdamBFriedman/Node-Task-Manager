const express = require("express");
// This ensures that mongoose runs
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create user
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

// Fetch all users
app.get("/users", (request, response) => {
  User.find({})
    .then((users) => {
      response.send(users);
    })
    .catch((error) => {
      response.status(500).send();
    });
});

// Fetch one user
app.get("/users/:id", (request, response) => {
  const _id = request.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send();
      }
      response.send(user);
    })
    .catch((error) => {
      response.status(500).send();
    });
});

// Create task
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
