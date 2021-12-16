const { MongoClient, ObjectID, ObjectId } = require("mongodb");

// Define connection url
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

// Connect to server
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    // Connection for specific database ("task-manager")
    const db = client.db(databaseName);

    // Delete trash task
    db.collection("tasks")
      .deleteOne({
        description: "Take trash out",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // Delete all users whose age is 67
    // db.collection("users")
    //   .deleteMany({
    //     age: 67,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Update all tasks
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       isCompleted: false,
    //     },
    //     // Set all tasks to complete
    //     {
    //       $set: {
    //         isCompleted: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Update a single user
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("61bb82d4519b2bd0cf50ceb8"),
    //     },
    //     // Set new name
    //     // {
    //     //   $set: {
    //     //     name: "Kramer",
    //     //   },
    //     // }

    //     // Increment age
    //     {
    //       $inc: {
    //         // 1 for increment and -1 for decrement
    //         age: -1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Query for individual user (by name)
    // db.collection("users").findOne({ name: "Adam" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch user...");
    //   }

    //   console.log(user);
    // });

    // Query for individual user (by user ID)
    // db.collection("users").findOne(
    //   { _id: new ObjectId("61bb82d4519b2bd0cf50ceb8") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch user...");
    //     }

    //     console.log(user);
    //   }
    // );

    // Find users with specific criteria (age: 30 in this case)
    // db.collection("users")
    //   .find({ age: 30 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // Find tasks that are not completed
    // db.collection("tasks")
    //   .find({ isCompleted: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // EXAMPLE CODE (IGNORE)
    /**
     * Insert one document into db = insertOne()
     * Insert multiple documents into db = insertMany()
     */

    // Add one user to database
    // db.collection("users").insertOne(
    //   {
    //     name: "Gary",
    //     age: 68,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert document.");
    //     }

    //     console.log(result.insertedId);
    //   }
    // );

    // Add multiple users to database
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Courtney",
    //       age: 30,
    //     },
    //     {
    //       name: "Simba",
    //       age: 9,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents.");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );

    // Add tasks to database
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Take trash out",
    //       isCompleted: false,
    //     },
    //     {
    //       description: "Feed Simba",
    //       isCompleted: true,
    //     },
    //     {
    //       description: "Clean litter",
    //       isCompleted: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents.");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );
  }
);
