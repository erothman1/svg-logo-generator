const inquirer = require("inquirer")
const maxLengthInput = require("inquirer-maxlength-input-prompt")
const fs = require("fs")

inquirer.registerPrompt("maxLengthInputPrompt", maxLengthInput)

inquirer.prompt([
    {
        type: "maxLengthInputPrompt",
        name: "text",
        message: "What text would you like on your logo?",
        maxLength: 3, //only allow 3 letters 
    },
    {
        type: "input",
        name: "textColor",
        message: "Text color?", //only allow color keyword or hexadecimal number
    }, 
    {
        type: "list",
        name: "shape",
        message: "What shape?",
        choices: ["rectangle", "triangle", "circle"],
    },
    {
        type: "input", 
        name: "shapeColor",
        message: "Shape color?" //only allow color keyword or hexadecimal number
    }
]).then((response) => {
    console.log(response)
    writeSVG("logo.svg", response)
})

const writeSVG = (fileName, data) => {
    const fileContent = renderSVG(data)

    fs.writeFile(fileName, fileContent, (err) => 
    err ? console.log(error) : console.log("Generated logo.svg"))
}

const renderSVG = (data) => {
    return `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="red" />

 <circle cx="150" cy="100" r="80" fill="green" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
`
}