const express = require("express");
const router = express.Router();
const pdfGeneratorService = require("../../pdfGenerationModule/pdfGeneratorService");

// @route   GET api/files/test
// @desc    Tests files route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "File Works" }));

router.post("/printPDF", (req, res) => {
  const data = req.body;
  pdfGeneratorService(data).then(data => {
    console.log("data from stream ", data);
    res.writeHead(200, {
      "Content-Type": "application/pdf"
    });
    res.end(data);
    // res.setHeader("Content-type", "application/pdf");
    // stream.pipe(res);
  });
});

module.exports = router;
