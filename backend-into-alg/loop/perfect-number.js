/* V - perfect number
Write an algorithm which verify if a given positive integer is a perfect number,
 meaning equal to the sum of his divisors (except himself).
 */
const perfectNumber = (number) => {
  let temp = 0;
  for (let i = 0; i <= number - 1; i++) {
    if (number % i == 0) {
      temp += i;
    }
  }
  if (temp != 0 && temp === number) {
    console.log("This a perfect number");
  } else {
    console.log("This is not a perfect number");
  }
};

perfectNumber(7);
