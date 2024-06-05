const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// GET All Workouts
// router.get("/", (req, res) => {
//   res.json({ mssg: "Get all Workouts" });
// });
router.get("/", getWorkouts);

// GET Single Workout
router.get("/:id", getWorkout);

// POST a new Workout
router.post("/", createWorkout);

// DELETE a Workout
router.delete("/:id", deleteWorkout);

// UPDATE a Workout
router.patch("/:id", updateWorkout);

module.exports = router;
