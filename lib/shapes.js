
class Shape {
    constructor(textContent, textColor, shapeColor){
        this.textContent = textContent;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeAttributes = 'rect width="200" height="200"'
        this.textX = "100";
        this.textY = "110";
    }
    generateSVG () {
        return`
       <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
    
            <${this.shapeAttributes} fill="${this.shapeColor}" />
    
            <text x="${this.textX}" y="${this.textY}" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
    
            </svg>
       `
    } 
    }

class Square extends Shape {
    constructor(textContent, textColor, shapeColor) {
        super(textContent, textColor, shapeColor)
        this.shapeAttributes = `rect width="200" height="200"`
    }
}
class Rectangle extends Shape {
    constructor(textContent, textColor, shapeColor) {
        super(textContent, textColor, shapeColor)
        this.textX = "150";
        this.shapeAttributes = `rect width="300" height="200"`
    }
}
class Circle extends Shape {
    constructor(textContent, textColor, shapeColor) {
        super(textContent, textColor, shapeColor)
        this.shapeAttributes = `circle cx="100" cy="100" r="100"`
    }
}
class Ellipse extends Shape {
    constructor(textContent, textColor, shapeColor) {
        super(textContent, textColor, shapeColor)
        this.textX = "150";
        this.shapeAttributes = `ellipse cx="150" cy="100" rx="150" ry="100"`
    }
}
class Triangle extends Shape {
    constructor(textContent, textColor, shapeColor) {
        super(textContent, textColor, shapeColor)
        this.textY = "190"
        this.shapeAttributes = `polygon points="100 30, 200 200, 0 200"`
    }
}


//export
module.exports = {
    Shape,
    Square,
    Rectangle,
    Circle,
    Ellipse,
    Triangle,
};


//Testing constructor class
// const circleEx = new Circle("ems", "red", "blue")
// console.log(circleEx)
// const svcode = circleEx.generateSVG()
// console.log(svcode)