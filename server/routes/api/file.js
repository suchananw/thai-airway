const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const pdfGeneratorService = require("../../pdfGenerationModule/pdfGeneratorService");

// @route   GET api/files/test
// @desc    Tests files route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "File Works" }));

router.post("/printPDF", (req, res) => {
  const data = req.body;
  pdfGeneratorService(data);
  res.send("/");
});

module.exports = router;
