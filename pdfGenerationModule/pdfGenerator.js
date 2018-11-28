const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

function generatePDF(html, filename) {
  return htmlToPdf.create(html, config).toBuffer(function(err, buffer) {
    return Buffer.isBuffer(buffer);
  });

  // .toStream(function(err, stream) {
  //   console.log("gen pdf stream");
  //   stream.pipe(fs.createWriteStream(filename));
  //   return true;
  // });
}

module.exports = generatePDF;
