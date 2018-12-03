const express = require("express");
const router = express.Router();
const pdfGeneratorService = require("../../pdfGenerationModule/pdfGeneratorService");

// @route   GET api/files/test
// @desc    Tests files route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "File Works" }));

router.post("/:filename", (req, res) => {
  console.log(req.params.filename);
  const data = req.body;
  pdfGeneratorService(data, res);
});

module.exports = router;
