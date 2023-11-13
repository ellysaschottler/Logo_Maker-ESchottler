
class Shape {
    constructor(shapeColor, textColor, textContent){
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
        this.shapeAttributes = `circle cx="50" cy="50" r="50"`
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
        this.shapeAttributes = `polygon points="50 15, 100 100, 0 10polygon points="100 30, 200 200, 0 200"`
    }
}
