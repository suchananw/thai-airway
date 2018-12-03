const htmlToPdf = require("html-pdf");
// const puppeteer = require("puppeteer");
const fs = require("fs");

const config = {
  format: "A4",
  orientation: "portrait",
  paginationOffset: 2
};

// // PDF /with buffer
// function generatePDF(html, res) {
//   const filename = "report-" + new Date().getTime() + ".pdf";
//   return htmlToPdf.create(html, config).toBuffer(function(err, buffer) {
//     res.writeHead(200, {
//       "Content-Type": "application/pdf",
//       "Content-Disposition": "attachment; filename=" + filename,
//       "Content-Length": buffer.length
//     });
//     res.end(buffer);
//     // return Buffer.from(buffer, "binary");
//   });
// }

// // PDF with stream and display on cilent side
function generatePDF(html, res) {
  return htmlToPdf.create(html, config).toBuffer(function (err, buffer) {
    console.log(buffer);
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Length": buffer.length
    });
    res.send(buffer, "binary");
  });
}

// // PDF use puppeteer
// function generatePDF(html, res) {
//   (async () => {
//     const browser = await puppeteer.launch({
//       args: [
//         "--no-sandbox",
//         "--disable-setuid-sandbox",
//         "--disable-dev-shm-usage",
//         "--single-process"
//       ]
//     });
//     const page = await browser.newPage();
//     await page.setContent(html);
//     const buffer = await page.pdf({ format: "A4" });
//     res.type("application/pdf");
//     res.send(buffer);
//     browser.close();
//   })();
// }

module.exports = generatePDF;
