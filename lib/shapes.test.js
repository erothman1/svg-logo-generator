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

