const express = require("express");
const notes = require("./data/notes"); //tochange
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running.");
// });

app.get("/api/home", (req, res) => {
  res.json(notes); //to change
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.port || 5005;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
