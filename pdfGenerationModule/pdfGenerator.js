const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  // Base path that's used to load files (images, css, js) when they aren't referenced using a host
  // base: "file:///home/www/your-asset-path"
  paginationOffset: 2
};

function generatePDF(html, filename) {
  return htmlToPdf.create(html, config).toStream(function(err, stream) {
    stream.pipe(fs.createWriteStream("./output/" + filename));
    return true;
  });
}

module.exports = generatePDF;
