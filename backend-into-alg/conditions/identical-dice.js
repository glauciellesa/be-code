/* III - identical dice
Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none. */

let randomValue = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let dice1 = randomValue();
let dice2 = randomValue();
let dice3 = randomValue();

let checkValue = (dice1, dice2, dice3) => {
  if (dice1 === dice2 && dice2 === dice3) {
    return "All identical values";
  } else if (dice1 === dice2 || dice2 === dice3 || dice3 === dice1) {
    return "Two identical values";
  } else {
    return "There is no identical value";
  }
};

console.log(checkValue(dice1, dice2, dice3));
