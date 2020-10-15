// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            
## Description

${data.description}

## Table of Contents

${data.toc}

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
