const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

function generatePDF(html, filename) {
  return htmlToPdf.create(html, config).toStream(function(err, stream) {
    // stream.pipe(fs.createWriteStream("./output/" + filename));
    // return true;
    if (err) return res.end(err.stack);
    return stream;
    // res.setHeader("Content-type", "application/pdf");
    // stream.pipe(res);
  });
}

module.exports = generatePDF;
