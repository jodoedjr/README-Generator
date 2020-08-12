var fs = require("fs");

// function to generate markdown for README
function generateMarkdown(userData) {
  fs.readFile("README_template.md", "utf8", function(error, fileData){
    if(error){
      throw error;
    }
    fileData = fileData.split("%%"); //splits fileData template into sections into sections
    //recombine template formating/structure with user input fields inbetween
    let outputData = `${fileData[0]}${userData.title}${fileData[1]}${userData.description}${fileData[2]}${userData.install}${fileData[3]}${userData.usage}${fileData[4]}${userData.license}${fileData[5]}${userData.contribution}${fileData[6]}${userData.test}${fileData[7]}${userData.github}${fileData[8]}${userData.email}${fileData[9]}`;
    fs.writeFile("./README.md", outputData, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Wrote to ./README.md");
    });
  });
}

module.exports = generateMarkdown;
