const inquirer = require("inquirer")
const maxLengthInput = require("inquirer-maxlength-input-prompt")
const fs = require("fs")
const shapes = require("./lib/shapes")

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
    
    if (data.shape === "rectangle") {
        const shape = new shapes.Rectangle(data.textColor, data.shapeColor, data.text)

        fs.writeFile(fileName, shape.createRectangle(data.textColor, data.shapeColor, data.text), (err) => 
        err ? console.log(err) : console.log("Generated logo.svg"))

    } else if (data.shape === "triangle") {
        const shape = new shapes.Triangle(data.textColor, data.shapeColor, data.text)

        fs.writeFile(fileName, shape.createTriangle(data.textColor, data.shapeColor, data.text), (err) => 
        err ? console.log(err) : console.log("Generated logo.svg"))

    } else {
        const shape = new shapes.Circle(data.textColor, data.shapeColor, data.text)

        fs.writeFile(fileName, shape.createCircle(data.textColor, data.shapeColor, data.text), (err) => 
        err ? console.log(err) : console.log("Generated logo.svg"))
    }

}
