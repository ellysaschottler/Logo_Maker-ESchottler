// Packages and imports needed for this application
const inquirer =  require('inquirer');
const fs = require('fs');
const { Shape, Square, Rectangle, Circle, Ellipse, Triangle } = require('./lib/shapes.js')

// An array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'textContent',
        message: 'What initials do you want to use on your logo? Type in up to three:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be? Type in the name of a color or the hex code:',
    },
    {
        type: 'list',
        name: 'shapeName',
        message: 'Choose a shape from the list below for your logo:',
        choices:
        [
            'Square',
            'Rectangle',
            'Circle',
            'Ellipse',
            'Triangle'
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be? Type in the name of a color or the hex code:',
    }
]

//Function to write SVG file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

//Function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        //instantiate the shape from user input
        let shapeInstance

        switch (answers.shapeName){
            case 'Square':
                shapeInstance = new Square(answers.textContent, answers.textColor, answers.shapeColor);
                break;
            case 'Rectangle': 
                shapeInstance = new Rectangle(answers.textContent, answers.textColor, answers.shapeColor);
                break;
            case 'Circle':
                shapeInstance = new Circle(answers.textContent, answers.textColor, answers.shapeColor);
                break;
            case 'Ellipse':
                shapeInstance = new Ellipse(answers.textContent, answers.textColor, answers.shapeColor);
                break;
            case 'Triangle':
                shapeInstance = new Triangle(answers.textContent, answers.textColor, answers.shapeColor);
                break;
            return;    
        }
        const svgContent = shapeInstance.generateSVG();
        writeToFile('logo.svg', svgContent);
    });
}



//Initialize the app
init()












// // generate the code to write the SVG file with the user's input
// function generateSVG ({textContent, textColor, shapeName, shapeColor}){
//     //create a shape const from the user input
//     const shapeInput = new `${shapeName}`();
//     console.log(ShapeClass)

//     return`
//    <svg version="1.1"
//         width="300" height="200"
//         xmlns="http://www.w3.org/2000/svg">

//         <${shapeInput.shapeAttributes} fill="${shapeColor}" />

//         <text x=${shapeInput.textX} y=${shapeInput.textY} font-size="40" text-anchor="middle" fill="${textColor}">${textContent}</text>

//         </svg>
//    `
// }
