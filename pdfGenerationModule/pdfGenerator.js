const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

function generatePDF(html) {
  return htmlToPdf.create(html, config).toBuffer(function(err, buffer) {
    console.log("This is a buffer:", Buffer.isBuffer(buffer));
    console.log(buffer);
    return Buffer.from(buffer, "binary");
  });
}

module.exports = generatePDF;
