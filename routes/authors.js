const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// All Authors Route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New author Route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Route for creating the authors
router.post("/", (req, res) => {
  res.send(req.body.name);
});

module.exports = router;
