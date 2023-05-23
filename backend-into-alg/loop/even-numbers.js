/* IV - even numbers
Write an algorithm which prints all the even numbers from 0 to a given number. */

let printEvenNumber = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
printEvenNumber(9);
