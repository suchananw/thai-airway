var htmlPdfChrome = require("html-pdf-chrome");

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

function generatePDF(html, outputFile) {
  return htmlPdfChrome.create(html, options).then(function(pdf) {
    pdf.toFile(outputFile);
    return true;
  });
}

module.exports = generatePDF;
