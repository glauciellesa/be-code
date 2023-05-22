/* V - print shop
A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there.
 Write an algorithm which given a number of copies and calculates the price. */
const shopCharges = (numberOfCopy) => {
  if (numberOfCopy <= 10) {
    return (numberOfCopy * 0.12).toFixed(2) + "€";
  } else if (numberOfCopy <= 20) {
    return (10 * 0.12 + (numberOfCopy - 10) * 0.11).toFixed(2) + "€";
  } else {
    return (10 * 0.12 + 20 * 0.11 + (numberOfCopy - 30) * 0.1).toFixed(2) + "€";
  }
};

console.log(shopCharges(17));
console.log(shopCharges(40));
