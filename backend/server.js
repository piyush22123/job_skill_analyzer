require('dotenv').config();

const app = require("./app");
const PORT = 3000;

const connectDB = require("./config/db");

const startServer = async () => {
  try {
    await connectDB();   // ✅ wait for DB connection
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.log("Database connection failed", err);
  }
};

startServer();