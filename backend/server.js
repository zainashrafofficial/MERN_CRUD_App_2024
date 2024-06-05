const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
// app.get("/", (req, res) => {
//   res.json({ mesg: "Welcome to App" });
// });
app.use("/api/workouts", workoutRoutes);

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listening for Requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connecting to DB & Listening on Port 4000",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });


  

// Listening for Requests
// app.listen(4000, () => {
//   console.log("Listening on Port 4000");
// });

// Listen for Requests
// app.listen(process.env.PORT, () => {
//   console.log("Listening on Port 4000", process.env.PORT);
// });
