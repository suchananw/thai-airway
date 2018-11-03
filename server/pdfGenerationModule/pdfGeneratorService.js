const htmlGenerator = require("./pdfTemplate/htmlGenerator");
const generatePDF = require("./pdfGenerator");

const constants = require("./constants");

function pdfGeneratorService(data) {
  data["logo"] =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFvsk2nXDB5cYdS05xx7HWJrouFAQSzR10r0MatepqFTFOtP7";
  data["table"] = "width:780px; border-collapse:collapse;";
  data["td"] = "height:25px; border-collapse:collapse;";
  data["fill"] =
    "height:25px; text-align: center; text-decoration-line: underline;";

  const templateFile = "./pdfGenerationModule/pdfTemplate/template.ejs";
  const outputFile =
    constants.PDF_OUTPUT_DIR + "pdf-" + new Date().getTime() + ".pdf";

  return htmlGenerator(templateFile, data) // Builds HTML
    .then(function(html) {
      return generatePDF(html, outputFile); // Builds PDF
    })
    .then(function(success) {
      console.log("PDF generation successful at " + outputFile);
      return success;
    })
    .catch(function(err) {
      console.log("ERROR in PDF generation : " + err);
      return false;
    });
}

module.exports = pdfGeneratorService;
