const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProjects,
  getProjectById,
  getOptions,
} = require("../controllers/projectController");

router.get("/", getProjects);
router.get("/options", getOptions);
router.get("/:id", getProjectById);
router.post("/", createProjects);

module.exports = router;
