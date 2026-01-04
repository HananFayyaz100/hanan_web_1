import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import projectRoutes2 from "./routes/projectRoutes2.js";
console.log("ENV CHECK:", process.env.MONGO_URI);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


app.use("/api/projects", projectRoutes);
app.use("/api/projects2", projectRoutes2);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);