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

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

`;
}

module.exports = generateMarkdown;
