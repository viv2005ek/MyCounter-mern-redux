const express = require("express");
const router = express.Router();
const Counter = require("../modles/counterModel.js"); // Import the model correctly

// Get the counter data
router.get("/count", async (req, res) => {
  try {
    const counterData = await Counter.findOne(); // Assuming you have only one counter document
    if (!counterData) return res.status(404).send("Counter not found");
    res.send(counterData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update the counter
router.put("/count", async (req, res) => {
  try {
    const counterData = await Counter.findOne(); // Fetch the counter document
    if (!counterData) return res.status(404).send("Counter not found");

    counterData.LastModified = Date.now();
    counterData.count = req.body.count;

    await counterData.save(); // Save the updated counter document

    res.send(counterData);
  } catch (error) {
    res.status(500).send("Error updating counter");
  }
});

module.exports = router;
