const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const skillsList = require("./skillsList"); // import your skill set
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// // require .env
// require('dotenv').config();

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());








// setup multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// route to upload and extract text
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    console.log("Upload request received");
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const jobDescription = req.body.jobDescription || "";
    const data = await pdfParse(req.file.buffer);

    // Normalize text for comparison
    const resumeLower = data.text.toLowerCase();
    const jdLower = jobDescription.toLowerCase();

    // Matching skills
    const matching = skillsList.filter(
      (skill) =>
        resumeLower.includes(skill.toLowerCase()) &&
        jdLower.includes(skill.toLowerCase())
    );

    // Missing skills (present in JD but not in resume)
    const missing = skillsList.filter(
      (skill) =>
        jdLower.includes(skill.toLowerCase()) &&
        !resumeLower.includes(skill.toLowerCase())
    );

    // Score calculation
    const score =
      matching.length + missing.length > 0
        ? Math.round((matching.length / (matching.length + missing.length)) * 100)
        : 0;

    // Response
    res.json({
      resumeText: data.text,
      jobDescription,
      skillMatch: { matching, missing },
      score,
    });
  } catch (err) {
    console.error("Error processing PDF:", err);
    res.status(500).send("Error parsing PDF: " + err.message);
  }
});

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
