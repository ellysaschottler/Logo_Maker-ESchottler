// Packages and imports needed for this application
const inquirer =  require('inquirer');
const fs = require('fs');
const { Shape, Square, Rectangle, Circle, Ellipse, Triangle } = require('./lib/shapes.js')

// An array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'textContent',
        message: 'What initials do you want to use on your logo? Type in up to three:',
        validate: function (input) {
            if (input.length <=3) {
                return true;
            } else {
                return 'You cannot enter more than 3 letters'
            }
        }
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

