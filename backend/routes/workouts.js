const express = require("express");

const router = express.Router();

// GET All Workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all Workouts" });
});



// GET Single Workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get Single Workout" });
});

// POST a new Workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a Workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a Workout" });
});

// UPDATE a Workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a Workout" });
});

module.exports = router;
