var ejs = require("ejs");

function htmlGenerator(templateFile, data) {
  return new Promise(function(resolve, reject) {
    ejs.renderFile(templateFile, data, function(err, html) {
      if (err) {
        console.log("html render error");
        reject(err);
      } else {
        console.log("html render success");
        resolve(html);
      }
    });
  });
}

module.exports = htmlGenerator;
