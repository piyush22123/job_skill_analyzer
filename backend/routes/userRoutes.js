const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authMiddleware");
const {getUserProfile} = require("../controllers/userController");

router.get("/profile", authenticate, getUserProfile);

module.exports = router;
