const fs = require("fs");
const licenseBadges = { // this object holds the markdown for each license badge!
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GNU GPLv2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "GNU GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "BSD 2-Clause": "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "GNU LGPLv3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "GNU AGPLv3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
};

function writeToFile(filename, writeData) {
  fs.writeFile("./" + filename, writeData, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Wrote to ./README.md\nDo not forget to add screenshots to your README.md, if applicable.`);
  });
}


// function to generate markdown for README
function generateMarkdown(userData) {
  fs.readFile("README_template.md", "utf8", function (error, fileData) {//read in README template
    if (error) {
      throw error;
    }

    fileData = fileData.split("%%"); //splits fileData template into sections into sections
    //recombine template formating/structure with user input fields inbetween
    let userDataArray = Object.values(userData);//user input object to array

    let outputData = fileData.map((str, index) => { // this map joins template pieces and user data together 1 for 1, with a few exceptions
      let userString = userDataArray[index];
      if (index == 0) { // if first section (i.e. title and license badge)
        userString += "    " + licenseBadges[userData.license]; // add a badge from the badge array to match the user input data
      }
      //if user input for a section is blank, skip it
      if (userDataArray[index] === "") {
        return; // return nothing, skipping this section
      }
      // fileData has one more formated string than userDataArray has inputs
      if (userDataArray[index]) {
        return `${str}${userString}`;
      } else {
        return `${str}`;
      }
    }).join(""); // join this map together into one big string / markdown file

    writeToFile("README.md", outputData);//write joined combined map of template and user data to README.md   
  });
}

module.exports = generateMarkdown;
