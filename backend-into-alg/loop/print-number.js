/* I - print numbers
Write an algorithms which receives an integers n and prints:

the numbers from 1 to n

the numbers from 1 to n in descending order

the numbers from -n to n

the odd numbers from 1 to n */

const printNumber = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
};

/* printNumber(9); */

const printNumberDescending = (number) => {
  for (let i = number; i >= 1; i--) {
    console.log(i);
  }
};

/* printNumberDescending(9); */

const printFromNegativeTopositive = (number) => {
  for (let i = -number; i <= number; i++) {
    console.log(i);
  }
};

/* printFromNegativeTopositive(3); */

const printOddNumber = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};

printOddNumber(20);
