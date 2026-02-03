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
    let list = display.innerText.split(/([+\-×÷])/);

    // convert numbers
    for (let i = 0; i < list.length; i++) {
        if (!isNaN(list[i])) {
            list[i] = Number(list[i]);
        }
    }

    // handle × and ÷
    let i = 0;
    while (i < list.length) {
        if (list[i] === '×') {
            let result = list[i - 1] * list[i + 1];
            list.splice(i - 1, 3, result);
            i = 0; // restart scan
        } 
        else if (list[i] === '÷') {
            let result = list[i - 1] / list[i + 1];
            list.splice(i - 1, 3, result);
            i = 0;
        } 
        else {
            i++;
        }
    }

    // handle + and -
    let total = list[0];

    for (let i = 1; i < list.length; i += 2) {
        if (list[i] === '+') total += list[i + 1];
        if (list[i] === '-') total -= list[i + 1];
    }

    display.innerText = total;
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