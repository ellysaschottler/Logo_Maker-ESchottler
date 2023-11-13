
class Shape {
    constructor(){
        this.textX = "100";
        this.textY = "110";
    }
}
class Square extends Shape {
    constructor() {
        super()
        this.shapeAttributes = `rect width="200" height="200"`
    }
}
class Rectangle extends Shape {
    constructor() {
        super()
        this.textX = "150";
        this.shapeAttributes = `rect width="300" height="200"`
    }
}
class Circle extends Shape {
    constructor() {
        super()
        this.shapeAttributes = `circle cx="100" cy="100" r="100"`
    }
}
class Ellipse extends Shape {
    constructor() {
        super()
        this.textX = "150";
        this.shapeAttributes = `ellipse cx="150" cy="100" rx="150" ry="100"`
    }
}
class Triangle extends Shape {
    constructor() {
        super()
        this.textY = "190"
        this.shapeAttributes = `polygon points="100 30, 200 200, 0 200"`
    }
}


//export
module.exports = Shape;