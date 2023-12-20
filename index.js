const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use("/images", express.static("./images"));

app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
