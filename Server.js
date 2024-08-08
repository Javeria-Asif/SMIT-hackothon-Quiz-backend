const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require("dotenv");
const connectDB = require("./Config/db");

// Load environment variables from .env file
dotenv.config();

//Routes import
const userRoutes = require("./Routes/studentRoutes");




// MongoDB connection
connectDB();

// Initialize express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


app.use(morgan('dev'));

// Routes
app.use("/api/v1/Students", userRoutes);


// Port
const PORT = process.env.PORT || 8001;

// Listen
app.listen(PORT, () => {
  console.log(`server running on ${process.env.DEV_MODE} port no ${PORT}`);
});
module.exports = app;