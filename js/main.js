// testing JS wiring
// console.log('wired');
let numbers = document.querySelectorAll('.num');
let zero = numbers[0];
let one = numbers[1];
let two = numbers[2];
let three = numbers[3];
let four = numbers[4];
let five = numbers[5];
let six = numbers[6];
let seven = numbers[7];
let eight = numbers[8];
let nine = numbers[9];

let screen = document.querySelector('.input');

let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');

let equalTo = document.querySelector('.equal');

// functions for four basic numberical operations
let addition = (operandOne, operandTwo) => Number(operandOne) + Number(operandTwo);
let subtraction = (operandOne, operandTwo) => Number(operandOne) - Number(operandTwo);
let multiplication = (operandOne, operandTwo) => Number(operandOne) * Number(operandTwo);
let division = (operandOne, operandTwo) => Number(operandOne) / Number(operandTwo);

// the operate function
let operate = (operator, operandOne, operandTwo) => {
        // console.log(operator,typeof(operator))
        if (operator === '+') {
                return addition(operandOne, operandTwo);
        } else if (operator === '-') {
                return subtraction(operandOne, operandTwo);
        } else if (operator === '*') {
                return multiplication(operandOne, operandTwo);
        } else if (operator === '/') {
                return division(operandOne, operandTwo);
        } else {
                console.log('no more operators')
        }
}

// populating screen on button press
let inputValue = screen.innerText;
const populator = (clickVal) => {
        let clicked = clickVal.innerText;
        inputValue = `${inputValue}${clicked}`;
        // console.log(inputValue);
        screen.innerText = inputValue;
}

one.addEventListener('click', () => populator(one));
two.addEventListener('click', () => populator(two));
three.addEventListener('click', () => populator(three));
four.addEventListener('click', () => populator(four));
five.addEventListener('click', () => populator(five));
six.addEventListener('click', () => populator(six));
seven.addEventListener('click', () => populator(seven));
eight.addEventListener('click', () => populator(eight));
nine.addEventListener('click', () => populator(nine));

add.addEventListener('click', () => {
        inputValue = `${inputValue}  ${add.innerText} `;
        screen.innerText = `${inputValue}`;
})

equalTo.addEventListener('click', () => {
        let screenString = screen.innerText.split(' ');
        console.log(screenString)
        let firstOperand = screenString[0];
        let secondOperand = screenString[2];
        let operator = screenString[1];

        console.log(operate(operator, firstOperand, secondOperand));
})