class Shapes {
    constructor(textColor, shapeColor, text) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text;
    }
}

class Rectangle extends Shapes {
    constructor(textColor, shapeColor, text) {
        super(textColor, shapeColor, text)
    }
    createRectangle(textColor, shapeColor, text) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="120" fill="${shapeColor}"/><text x="65" y="70" font-size="50" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text></svg>`
    }
}

class Circle extends Shapes {
    constructor(textColor, shapeColor, text) {
        super(textColor, shapeColor, text)
    }
    createCircle(textColor, shapeColor, text) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
    }
}

class Triangle extends Shapes {
    constructor(textColor, shapeColor, text) {
        super(textColor, shapeColor, text)
    }
    createTriangle(textColor, shapeColor, text) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/><text x="150" y="155" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
    }
}

module.exports = {
    Shapes,
    Rectangle, 
    Circle,
    Triangle,
}
