// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            
## Description

${data.desc}

## Table of Contents

[Installation](#-installation)  
[Usage](#-usage)  
[License](#-license)  
[Contributing](#-contributing)
[Tests](#-tests) 
[Questions](#-questions) 

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license} 

## Contributing

${data.contributing}

## Tests

<a href="${data.test}">${data.test}</a>

## Questions 

For any questions regarding this project, please email ${data.email}.
`;
}

module.exports = generateMarkdown;
