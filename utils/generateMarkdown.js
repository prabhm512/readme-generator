// Store badge url of selected licenses
let selectedLicenses = [];

// License badges
let licenseBadge = [
  {
    name: "GNU AGPLv3",
    url: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  },
  {
    name: "GNU GPLv3",
    url: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
    name: "GNU LGPLv3",
    url: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  },
  {
    name: "MIT License",
    url: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  {
    name: "Mozilla Public License 2.0",
    url: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  },
  {
    name: "Apache License 2.0",
    url: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  {
    name: "Boost Software License 1.0",
    url: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
    name: "The Unlicense",
    url: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
]

// function to generate markdown for README
function generateMarkdown(data) {

  // Convert license name into badge
  for (let i=0; i<data.license.length; i++) {;
    for (let j=0; j<licenseBadge.length; j++) {
      if (data.license[i] == licenseBadge[j].name) {
        selectedLicenses.push(licenseBadge[j].url);
      }
    }
  }

  return `# ${data.title}

${selectedLicenses.join(" ")}
            
## Description

${data.desc}

## Table of Contents

[Installation](#installation)  
[Usage](#usage)  
[License](#licenses)  
[Contributing](#contributing)                                             
[Tests](#tests)                                                                    
[Questions](#questions) 

## Installation

${data.installation}

## Usage

${data.usage}

## Licenses

The underlying source code used to format and display this content is licensed under the ${selectedLicenses.join(" ")}

## Contributing

${data.contributing}

## Tests

<a href="${data.test}">Click to open test code</a>

## Questions 

My Github profile is <a href="https://github.com/${data.username}">${data.username}</a>.

If you have any questions regarding this project, please email ${data.email}.
`;
}

module.exports = generateMarkdown;
