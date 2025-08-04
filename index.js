const rs = require("readline-sync");

const operators=['+', '-', '*', '/', '%'];


  const getOperator = (operators) => rs.question
  (
    `What operation would you like to perform (${operators.join(', ')}): `, {
    limit: operators,
    limitMessage: "This is not a valid operation: ",
  });

  const getNumber = (order) => rs.questionInt(`Please enter the ${order} number: `);

  


const getCalculationResult = (operator, numOne , numTwo) => {
  const operations = {
    '+': (numOne, numTwo) => numOne + numTwo,
    '-': (numOne, numTwo) => numOne - numTwo,
    '*': (numOne, numTwo) => numOne * numTwo,
    '/': (numOne, numTwo) => numOne / numTwo,
    '%': (numOne, numTwo) => numOne % numTwo,
  };
  return operations[operator](numOne, numTwo);
};


const runCalculator=(operators)=>{
  const operator = getOperator(operators);
  const numOne = getNumber("first");
  const numTwo = getNumber("second");
  const result = getCalculationResult(operator, numOne, numTwo);
  console.log("The result is: " + result);
}

runCalculator(operators);