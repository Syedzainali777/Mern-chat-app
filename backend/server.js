import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import connetdb from "./DB/connetMongodb.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB before starting the server
connetdb();

// Use express.json() middleware to parse JSON payloads
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
