let solution = 0;
let userInput = 0;
let solutionDisplay = '0';
let operationStored = '';
let clearAfterOperation = false;
let solutionField = document.querySelector('.solution');
solutionField.textContent = `${solutionDisplay}`;
let calculatorButtons = document.querySelectorAll('.calc-btn');

function operate(operation, numOne, numTwo) {
  switch(operation) {
    case '+':
      solution = add(numOne, numTwo);
      break;
    case '-':
      solution = subtract(numOne, numTwo);
      break;
    case 'X':
      solution = multiply(numOne, numTwo);
      break;
    case '/':
      if (numTwo != 0) {
        solution = divide(numOne, numTwo);
      } else {
        solution = "You cannot divide by 0!";
        userInput = 0;
        operationStored = '';
      }
      break;
    default:
      break;
  }
  userInput = 0;
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numTwo == 0 ? false : numOne / numTwo;
}

function clearCalculator() {
  solutionDisplay = '0';
  solutionField.textContent = `${solutionDisplay}`;
  solution = 0;
  userInput = 0;
  operationStored = '';
  clearAfterOperation = false;
}

function addToSolutionField(digit) {
  if (solutionField.textContent === '0' || clearAfterOperation){
    solutionField.textContent = digit;
    clearAfterOperation = false;
  } else {
    solutionField.textContent = solutionField.textContent + digit;
  }
}

function checkOperation(operator) {
  if (solution === "You cannot divide by 0!") {
    clearCalculator();
  }

  if (operationStored != '') {
    userInput = Number(solutionField.textContent);
    operate(operationStored, solution, userInput);
  } else {
    solution = Number(solutionField.textContent);
  }

  operationStored = operator;
  clearAfterOperation = true;
  solutionField.textContent = solution;
}


for (let i = 0; i < calculatorButtons.length; i++) {
  calculatorButtons[i].addEventListener("click", function(e) {
    let calculatorInput = e.target.textContent;

    switch (calculatorInput) {
      case '0':
        addToSolutionField(calculatorInput);
        break;
      case '1':
        addToSolutionField(calculatorInput);
        break;
      case '2':
        addToSolutionField(calculatorInput);
        break;
      case '3':
        addToSolutionField(calculatorInput);
        break;
      case '4':
        addToSolutionField(calculatorInput);
        break;
      case '5':
        addToSolutionField(calculatorInput);
        break;
      case '6':
        addToSolutionField(calculatorInput);
        break;
      case '7':
        addToSolutionField(calculatorInput);
        break;
      case '8':
        addToSolutionField(calculatorInput);
        break;
      case '9':
        addToSolutionField(calculatorInput);
        break;
      case '+':
        checkOperation(calculatorInput);
        break;
      case '-':
        checkOperation(calculatorInput);
        break;
      case 'X':
        checkOperation(calculatorInput);
        break;
      case '/':
        checkOperation(calculatorInput);
        break;
      case '=':
        if(operationStored == '') {
          solutionField.textContent = solutionField.textContent;
        } else {
          userInput = Number(solutionField.textContent);
          operate(operationStored, solution, userInput);
          solutionField.textContent = solution;
        }
        operationStored = '';
        break;
      case 'Clear':
        clearCalculator();
        break;
      default:
        break;
    }
  });
}
