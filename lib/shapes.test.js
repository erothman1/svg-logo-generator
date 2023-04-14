const Shapes = require("./shapes")

describe("Shapes.Shapes", () => {
    describe("Instantiate", () => {
        it("should be an instance of Shapes class", () => {
            const newShape = new Shapes.Shapes()
            expect(newShape).toBeInstanceOf(Shapes.Shapes)
        })
    })
    describe("Initialize textColor", () => {
        it("should set textColor properly", () => {
            const textColor = "blue"
            const newShape = new Shapes.Shapes(textColor)
            expect(newShape.textColor).toBe(textColor)
        })
    })
    describe("Initialize shapeColor", () => {
        it("should set shapeColor property", () => {
            const shapeColor = "pink"
            const newShape = new Shapes.Shapes("blue", shapeColor)
            expect(newShape.shapeColor).toBe(shapeColor)
        })
    })
    describe("Initialize text", () => {
        it("should set text property", () => {
            const text = "ERR"
            const newShape = new Shapes.Shapes("blue", "pink", text)
            expect(newShape.text).toBe(text)
        })
    })
})

describe("Shapes.Rectange", () => {
    describe("Initialize rectangle SVG", () => {
        it("should create a rectangle SVG", () => {
            const textColor = "pink"
            const shapeColor = "blue"
            const text = "ERR"
            const newShape = new Shapes.Rectangle
            const createdShape = newShape.createRectangle(textColor, shapeColor, text)

            expect(createdShape).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="120" fill="${shapeColor}"/><text x="65" y="70" font-size="50" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text></svg>`)
        })
    })
})

describe("Shapes.Circle", () => {
    describe("Initialize circle SVG", () => {
        it("should create a circle SVG", () => {
            const textColor = "pink"
            const shapeColor = "blue"
            const text = "ERR"
            const newShape = new Shapes.Circle
            const createdShape = newShape.createCircle(textColor, shapeColor, text)

            expect(createdShape).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`)
        })
    })
})

describe("Shapes.Triangle", () => {
    describe("Initialize triangle SVG", () => {
        it("should create a triangle SVG", () => {
            const textColor = "pink"
            const shapeColor = "blue"
            const text = "ERR"
            const newShape = new Shapes.Triangle
            const createdShape = newShape.createTriangle(textColor, shapeColor, text)

            expect(createdShape).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/><text x="150" y="155" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`)
        })
    })
})