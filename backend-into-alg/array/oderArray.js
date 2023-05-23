/* V - ordered array
Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not. */
function printOrderArray(numbersArr) {
  let numberTrue = 0;
  let numberFalse = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > numbersArr[i + 1]) {
      numberTrue = 1;
    } else {
      numberFalse = 1;
    }
  }
  if (numberTrue === numberFalse) {
    return false;
  } else {
    return true;
  }
}
console.log(printOrderArray([3, 5, 4]));
console.log(printOrderArray([3, 5, 7, 9]));
console.log(printOrderArray([3, 1, 7, 9]));
console.log(printOrderArray([9, 6, 7]));
console.log(printOrderArray([9, 7, 4]));
