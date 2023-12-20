const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProjects,
  getProjectById,
} = require("../controllers/projectController");

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProjects);

module.exports = router;
