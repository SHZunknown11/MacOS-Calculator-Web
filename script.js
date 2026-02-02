console.log("js works");

document.addEventListener("keydown", function(event) {
    const key = event.key;
    console.log("Key pressed: " + key);
});

const display = document.querySelector('.input-value');
const buttons = document.querySelectorAll('.btn');


function updateDisplay(value) {
    const currentText = display.innerText;
    const operators = ['+', '-', '×', '÷', '.', '%', "+/-"];
    const lastChar = currentText.slice(-1); // Get the very last character


    if (currentText.length >= 12 && !operators.includes(value)) {
        return; 
    }

    // --- FEATURE 2: Operator Overwriting ---
    if (operators.includes(value)) {
        if (operators.includes(lastChar)) {
            // If the last thing typed was an operator, 
            // replace it with the new one (e.g., change 5+ to 5*)
            display.innerText = currentText.slice(0, -1) + value;
            return;
        }
    }

    // Standard logic to handle starting at 0
    if (currentText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}
function clearDisplay() {
    display.innerText = '0';
}


function calculateResult() {
    // 1. Turn the string into a list (Array)
    const list = display.innerText.split(/([+\-×÷])/); 

    // 2. Set the starting total to the first item in the list
    let total = Number(list[0]); 

    // 3. Look at the rest of the list, two items at a time
    for (let i = 1; i < list.length; i += 2) {
        let operator = list[i];     // This is the "+" or "×"
        let nextNumber = Number(list[i+1]); // This is the "5" or "2"

        // 4. Do the math based on the operator
        if (operator === '+') total = total + nextNumber;
        if (operator === '-') total = total - nextNumber;
        if (operator === '×') total = total * nextNumber;
        if (operator === '÷') total = total / nextNumber;
    }

    display.innerText = total;
    return total;
}


function toggleSign() {
    let currentText = display.innerText;
    if (currentText === '0') return;
    if (currentText.startsWith('-')) {
        display.innerText = currentText.substring(1);} 
    else {
        display.innerText = '-' + currentText;}
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

       
        if (buttonText === 'AC') {
            clearDisplay();
        } else if (buttonText === '+/-') {
            // CALL THE TOGGLE FUNCTION INSTEAD OF UPDATING DISPLAY
            toggleSign();
        } 
        else if (buttonText === '=') {
            calculateResult();
        } else {
            updateDisplay(buttonText);
        }
    });
});