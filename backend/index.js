import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import MongoDB from "./database/database.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();

// Connect to the database
MongoDB();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  }),
);

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
