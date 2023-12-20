const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    projectId: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
    languages: {
      type: [String],
      // enum: ["javascript", "typescript", "python"],
    },
    side: {
      type: [String],
      // enum: ["backend", "frontend", "fullstack"],
    },
    stack: {
      type: [String],
      // enum: ["mean", "mern"],
    },
    styles: {
      type: [String],
      // enum: ["plain css", "sass", "css in js", "styled components", "tailwind"],
    },
    componentLibraries: {
      type: [String],
      // enum: ["ant design", "material ui"],
    },
    frameworks: {
      type: [String],
      // enum: ["react", "angular", "vue", "express"],
    },
    hooks: {
      type: [String],
      // enum: ["useState", "useContext", "useEffect", "useReducer"],
    },
    functionalities: {
      type: [String],
      // enum: ["auth", "fetch", "paginate"],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Active", "Completed", "On Hold"],
    },
    website: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
