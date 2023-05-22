/* I - cinema tariffs
In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if 
the person can have a reduced tariff prints the price to pay. */

const cinemaTariffs = (age) => {
  return age > 18 ? "10 €" : "8€";
};

console.log(cinemaTariffs(10));
