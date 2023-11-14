

const { Shape, Square, Rectangle, Circle, Ellipse, Triangle } = require('./shapes.js')

describe("When the word blue is input as the text color, the text color of the logo will be blue", () => {
    test("Choose blue text", () => {
        const triangleEx = new Triangle("", "blue", "");
        expect(triangleEx).toEqual({
            textContent: '',
            textColor: 'blue',
            shapeColor: '',
            shapeAttributes: 'polygon points="100 30, 200 200, 0 200"',
            textX: '100',
            textY: '190'
          });
        });
    });


// test that each triangle renders the correct svg code
describe("When a triangle is rendered using sample input of aaa, blue, and red, the correct string is generated for an svg file of a triangle", () => {
    test("Create a triangle and render its svg code", () => {
        const triangle2 = new Triangle("aaa", "blue", "red")
        const svg = triangle2.generateSVG()
        expect(svg).toContain('<polygon points="100 30, 200 200, 0 200" fill="red" />')
        expect(svg).toContain('<text x="100" y="190" font-size="40" text-anchor="middle" fill="blue">aaa</text>')
    })
})

describe("When a square is rendered using sample input of aaa, blue, and red, the correct string is generated for an svg file of a square", () => {
    test("Create a square and render its svg code", () => {
        const square2 = new Square("aaa", "blue", "red")
        const svg = square2.generateSVG()
        expect(svg).toContain('<rect width="200" height="200" fill="red" />')
        expect(svg).toContain('<text x="100" y="110" font-size="40" text-anchor="middle" fill="blue">aaa</text>')
    })
})

describe("When a circle is rendered using sample input of aaa, blue, and red, the correct string is generated for an svg file of a circle", () => {
    test("Create a circle and render its svg code", () => {
        const circle2 = new Circle("aaa", "blue", "red")
        const svg = circle2.generateSVG()
        expect(svg).toContain('<circle cx="100" cy="100" r="100" fill="red" />')
        expect(svg).toContain('<text x="100" y="110" font-size="40" text-anchor="middle" fill="blue">aaa</text>')
    })
})

describe("When a ellipse is rendered using sample input of aaa, blue, and red, the correct string is generated for an svg file of a ellipse", () => {
    test("Create a ellipse and render its svg code", () => {
        const ellipse2 = new Ellipse("aaa", "blue", "red")
        const svg = ellipse2.generateSVG()
        expect(svg).toContain('<ellipse cx="150" cy="100" rx="150" ry="100" fill="red" />')
        expect(svg).toContain('<text x="150" y="110" font-size="40" text-anchor="middle" fill="blue">aaa</text>')
    })
})

describe("When a rectangle is rendered using sample input of aaa, blue, and red, the correct string is generated for an svg file of a rectangle", () => {
    test("Create a rectangle and render its svg code", () => {
        const rectangle2 = new Rectangle("aaa", "blue", "red")
        const svg = rectangle2.generateSVG()
        expect(svg).toContain('<rect width="300" height="200" fill="red" />')
        expect(svg).toContain('<text x="150" y="110" font-size="40" text-anchor="middle" fill="blue">aaa</text>')
    })
})
