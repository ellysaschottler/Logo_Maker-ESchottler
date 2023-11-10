
class Shape {
    constructor(shapeColor, textColor, textContent){
        this.width = "100";
        this.height = "100";
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.textContent = textContent;
    }
}
class Square extends Shape {
    constructor() {
        super()
        this.shapeAttributes = `rect`
    }
}
class Rectangle extends Shape {
    constructor() {
        super()
        this.width = "200"
        this.shapeAttributes = `rect`
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
        this.width = "200"
        this.shapeAttributes = `ellipse cx="100" cy="50" rx="100" ry="50"`
    }
}
class Triangle extends Shape {
    constructor() {
        super()
        this.shapeAttributes = `polygon points="50 15, 100 100, 0 100"`
    }
}
