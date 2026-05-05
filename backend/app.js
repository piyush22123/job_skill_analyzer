const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", resumeRoutes);
app.use("/api/auth/", authRoutes);
app.use("/user/", userRoutes);

module.exports = app;