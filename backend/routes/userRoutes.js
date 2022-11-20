const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  updateProfile,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getUser);
router.get("/profile", authMiddleware ,updateProfile)

module.exports = router;
