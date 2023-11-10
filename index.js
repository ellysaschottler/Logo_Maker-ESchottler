
// full code for circle with the text SVG in the center for reference
/* <svg width="100" height="100">
   <circle cx="50" cy="50" r="50" fill="yellow" />
   <text x="40" y="50" class="small">SVG</text>
</svg> 
  */
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
        name: 'backgroundColor',
        message: 'What color do you want the shape to be? Type in the name of a color or the hex code:',
    }
]

