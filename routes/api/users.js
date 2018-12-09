const express = require("express");
const router = express.Router();

// route will go to /api/users/....

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
