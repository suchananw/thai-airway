const htmlGenerator = require("./pdfTemplate/htmlGenerator");
const generatePDF = require("./pdfGenerator");
const constants = require("./constants");
const fs = require("fs");

function pdfGeneratorService(data) {
  data["logo"] =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFvsk2nXDB5cYdS05xx7HWJrouFAQSzR10r0MatepqFTFOtP7";
  data["style"] = {
    table: "width:720px; border-collapse:collapse;",
    td: "height:25px; border-collapse:collapse;",
    fill: "height:25px; text-align: center; border-bottom: 1px solid black;",
    tablelabel: "padding-left: 10px; text-transform: uppercase; width: 200px;",
    tablefill:
      "text-align: center; width: 160px; border-right: 1px solid black;",
    spanfill:
      "display: table-cell; min-width:140px; border-bottom: 1px solid black;",
    underline: "display: table-cell; border-bottom: 1px solid black;"
  };

  // const templateFile = "./pdfGenerationModule/pdfTemplate/template.ejs";
  const templateFile = fs.readFileSync(
    require.resolve("./pdfGenerationModule/pdfTemplate/template.ejs"),
    "utf8"
  );
  const filename = "pdf-" + new Date().getTime() + ".pdf";
  const outputFile = constants.PDF_OUTPUT_DIR + filename;

  return (
    htmlGenerator(templateFile, data) // Builds HTML
      .then(function(html) {
        return generatePDF(html, filename); // Builds PDF
      })
      // .then(function(success) {
      //   console.log("PDF generation successful at " + outputFile);
      //   return success;
      // })
      .catch(function(err) {
        console.log("ERROR in PDF generation : " + err);
        return false;
      })
  );
}

module.exports = pdfGeneratorService;
