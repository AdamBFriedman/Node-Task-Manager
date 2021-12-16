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
