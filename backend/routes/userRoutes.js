const express = require("express");
const router = express.Router();


const {
  authUser,
  signup,
  userProfile,
} = require("../controllers/userControllers");
const protect = require("../middleware/authmiddleware");

router.post("/login", authUser);

router.post("/register", signup);
router.route("/profile").get(protect, userProfile);

module.exports = router;
