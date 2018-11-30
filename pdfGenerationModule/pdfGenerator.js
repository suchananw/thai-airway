const htmlToPdf = require("html-pdf");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

function generatePDF(html, res) {
  const filename = "report-" + new Date().getTime() + ".pdf";
  return htmlToPdf.create(html, config).toBuffer(function(err, buffer) {
    console.log("genpdf This is a buffer:", Buffer.isBuffer(buffer));
    console.log("genpdf " + buffer);
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=" + filename,
      "Content-Length": buffer.length
    });
    res.end(returnData);
    // return Buffer.from(buffer, "binary");
  });
}

module.exports = generatePDF;
