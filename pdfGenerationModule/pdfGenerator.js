const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

function generatePDF(html, filename) {
  return htmlToPdf.create(html, config).toBuffer(function(err, buffer) {
    dataBuffer = buffer;
    console.log("This is a buffer:", Buffer.isBuffer(buffer));
    console.log(buffer);
    return dataBuffer;
  });
}

module.exports = generatePDF;
