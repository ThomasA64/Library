const express = require("express");
const router = express.Router();

// All Authors Route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New author Route
router.get("/new", (req, res) => {
  res.render("authors/new");
});

// Route for creating the authors
router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
