const Project = require("../models/projectModel");

// const getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.status(200).json(projects);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getProjects = async (req, res) => {
  try {
    const filter = {};

    // console.log("req.query:", req.query);

    if (req.query.title) {
      filter.title = new RegExp(req.query.title, "i");
    }

    if (req.query.language) {
      filter.languages = req.query.language;
    }

    if (req.query.framework) {
      filter.frameworks = req.query.framework;
    }

    const projects = await Project.find(filter);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProjects = async (req, res) => {
  try {
    const projects = await Project.insertMany(req.body);
    res.status(201).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOptions = async (req, res) => {
  try {
    // here, be careful with the naming of the parameter: it should correspond to the one in the model
    const languageOptions = await Project.find().distinct("languages");
    const frameworkOptions = await Project.find().distinct("frameworks");
    res.json({ languages: languageOptions, frameworks: frameworkOptions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProjects, getProjectById, createProjects, getOptions };
