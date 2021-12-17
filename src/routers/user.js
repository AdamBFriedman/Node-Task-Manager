const express = require("express");
const User = require("../models/user");
const router = new express.Router();

// Create user
router.post("/users", async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    response.status(201).send(user);
  } catch (error) {
    response.status(400).send(error);
  }
});

// Fetch all users
router.get("/users", async (request, response) => {
  try {
    const users = await User.find({});
    response.status(201).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Fetch one user
router.get("/users/:id", async (request, response) => {
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
router.patch("/users/:id", async (request, response) => {
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
    const user = await User.findById(_id);

    updates.forEach((update) => {
      user[update] = _body[update];
    });

    await user.save();
    // const user = await User.findByIdAndUpdate(_id, _body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!user) {
      return response.status(404).send();
    }

    response.status(201).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Delete user
router.delete("/users/:id", async (request, response) => {
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

module.exports = router;
