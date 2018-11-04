// const htmlPdfChrome = require("html-pdf-chrome");
const htmlToPdf = require("html-pdf");
const fs = require("fs");

var options = {
  port: 9222,
  printOptions: {
    printBackground: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0.5,
    marginRight: 0.5,
    paperWidth: 8.27,
    paperHeight: 11.69
  }
};

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
