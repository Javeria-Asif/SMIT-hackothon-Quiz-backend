
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
 
const connectDB = async () => {
  try {
    

    await mongoose.connect(
       "mongodb+srv://saweratahir42:admin@cluster0.bgroelm.mongodb.net/" ,{dbName:'users'}
  );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
// thek he ab code  me check karlo data save ho raha ya ni ? ager monodb par agya tu sab perfecyt he  right?yes run jkarien or mujhe