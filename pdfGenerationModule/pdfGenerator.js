const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

function generatePDF(html, filename) {
  return htmlToPdf.create(html, config).toStream(function(err, stream) {
    console.log("gen pdf stream");
    stream.pipe(fs.createWriteStream("./foo.pdf"));
    return true;
  });
}

module.exports = generatePDF;
