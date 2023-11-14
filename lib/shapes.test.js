const { Shape, Square, Rectangle, Circle, Ellipse, Triangle } = require('./lib/shapes.js')



//test example from module 10

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');