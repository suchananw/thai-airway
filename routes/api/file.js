const express = require("express");
const router = express.Router();
const pdfGeneratorService = require("../../pdfGenerationModule/pdfGeneratorService");

// @route   GET api/files/test
// @desc    Tests files route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "File Works" }));

router.post("/printPDF", (req, res) => {
  const data = req.body;
  pdfGeneratorService(data, res);
  // .then(returnData => {
  // console.log("api This is a buffer:", Buffer.isBuffer(returnData));
  // console.log("api data buffer ", returnData);
  // res.writeHead(200, {
  //   "Content-Type": "application/pdf",
  //   "Content-Disposition": "attachment; filename=" + filename
  //   // "Content-Length": data.length
  // });
  // res.end(returnData);
  // // res.setHeader("Content-type", "application/pdf");
  // // stream.pipe(res);
  // });
});

module.exports = router;
