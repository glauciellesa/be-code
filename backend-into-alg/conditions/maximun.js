/* II - maximum
Write an algorithm which given 3 numbers finds the maximum. */

const numbers = [10, 30, 2, 5, 60];
const LargestNumber = (arrary) => {
  let bigNumber;
  let smallNumber;
  let tempBig;
  let tempSmall;
  for (let i = 0; i < numbers.length; i++) {
    tempBig = numbers[i]; //2 4 6 3
    tempSmall = numbers[i + 1]; //4 6 3 9
    if (tempBig < tempSmall) {
      smallNumber = tempBig; //2 4
      bigNumber = tempSmall; //4 6
    } else {
      smallNumber = tempSmall; //3
      bigNumber = tempBig; // 6
    }
  }
  return bigNumber;
};

console.log(LargestNumber(numbers));
