import mongoose from "mongoose";

const connetdb = async () => {
  try {
    // Ensure the MongoDB URI is correctly fetched from the environment variables
    const mongoURI = process.env.MONGO_DB_URI;

    if (!mongoURI) {
      throw new Error("MONGO_DB_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error in DB connection:", error.message);
  }
};

export default connetdb;
