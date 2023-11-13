// Packages needed for this application
const inquirer =  require('inquirer');
const fs = require('fs');

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
    inquirer.createPromptModule(questions).then((answers) => {
        const svgContent = generateSVG(answers);
        writeToFile('logo.svg', svgContent);
    });
}

//Initialize the app
init()


function generateSVG ({textContent, textColor, shapeName, shapeColor}){

   `<svg version="1.1"
   width="300" height="200"
   xmlns="http://www.w3.org/2000/svg">

<${shapeName.shapeAttributes} fill="${shapeColor}" />

<text x=${shapeName.textX} y=${shapeName.textY} font-size="40" text-anchor="middle" fill="${textColor}">${textContent}</text>

</svg>
   `
}