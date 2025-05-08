import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookroutes from "./controllers/bookroutes.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.use("/api/books", bookroutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
