const { MongoClient } = require("mongodb");
const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://abirbanerjee:RJbrWdj7p9IqI3l3@cluster0.gr32y.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"

// Create a new MongoClient instance

const client = new MongoClient(mongoURI);

const mongoDB = async () => {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB!");

        // Access a specific database
        const database = client.db("gofoodmern");

        // Access a specific collection (optional)
        const collection = database.collection("food_items");
        console.log("Database and collection ready for operations.");

          // Perform any operations here...
          // Fetch data (e.g., find all documents)
          const data = await collection.find({}).toArray();

          // Print the fetched data
          //console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        // Close the connection
        //await client.close();
       // console.log("MongoDB connection closed.");
    }
}

// const mongoDB = async () => {
//   try {
//       mongoose.set('strictQuery', false)
//       mongoose.connect(mongoURI) 
//       console.log('Mongo connected');
//       const fetched_data = mongoose.connection.db.collection("food_items");
//       fetched_data.find({}).toArray(function(err,data){
//          if(err) console.log(err);
//             else console.log(data);
//       })
//   }
//   catch(error) {
//       console.log(error)
//       process.exit()
//   }
//   }
  module.exports = mongoDB;

