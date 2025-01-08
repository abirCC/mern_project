const mongoose = require("mongoose");
const { Schema } = mongoose;
// Replace with your MongoDB connection string
const mongoURI = "mongodb+srv://abirbanerjee:RJbrWdj7p9IqI3l3@cluster0.gr32y.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.error("Connection error:", error));
const UserSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  location: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  },
  date: {
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('User',UserSchema)