/* II - print random number of integers
Write an algorithm which receives an random integer and prints from 0 to it. */

const printNumber = (randomNumber) => {
  for (let i = 0; i < randomNumber; i++) {
    console.log(i);
  }
};

const randomNumber = Math.floor(Math.random() * 10) + 1;

printNumber(randomNumber);
