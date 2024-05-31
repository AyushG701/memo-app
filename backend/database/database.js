import mongoose from "mongoose";

// Options for the connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Function to connect to the database
const MongoDB = async () => {
  try {
    await mongoose.connect(process.env.dbURI, options);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default MongoDB;
