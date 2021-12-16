// Install mongodb driver (this allows us to connect to a mongo db database from node.js)
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// Define connection url
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

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

    // Insert document into db
    db.collection("users").insertOne({
      name: "Adam",
      age: 36,
    });
  }
);
