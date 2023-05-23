/* III - throw dices
Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received. */
let numbersGiven = [];
let throwDices = () => {
  for (let i = 1; i <= 6; i++) {
    let givenNumber = Math.floor(Math.random() * 6) + 1;
    numbersGiven.push(givenNumber);
  }
};
throwDices();

var countOcurrence = 0;
function getOccurrence(array, value) {
  array.forEach((v) => v === value && countOcurrence++);
  return countOcurrence;
}
let checkNumber = 2;

getOccurrence(numbersGiven, checkNumber);

console.log(`The ${checkNumber} is recived times ${countOcurrence}`);
