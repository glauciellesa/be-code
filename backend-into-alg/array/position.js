/* IV - minimum position
Write an algorithm which receives an array of integers and prints the position of its minimum. */

const printPositon = (arr) => {
  console.log(arr.indexOf(Math.min(...arr)));
};

printPositon([6, 2, 1, 87, 8, 20, 24, 4, 2]);
