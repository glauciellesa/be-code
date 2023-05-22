/* I - calculate
Write an algorithm which calculates:

the sum of two chosen number

the division of two chosen number

the modulo of two inputed numbers */

function sum(num1, num2) {
  return num1 + num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function module(num1, num2) {
  return num1 % num2;
}

const n1 = 12;
const n2 = 6;
console.log(sum(n1, n2));
console.log(division(n1, n2));
console.log(module(n1, n2));
