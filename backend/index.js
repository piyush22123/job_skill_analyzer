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
const JWT_SECRET = process.env.JWT_SECRET;

// middleware
app.use(cors());
app.use(express.json());



// // connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullName: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// // ---------- AUTH ROUTES ----------
// // Signup
// app.post("/signup", async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ fullName, email, password: hashedPassword });
//     await newUser.save();

//     res.json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

//     res.json({ message: "Login successful", token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });




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
