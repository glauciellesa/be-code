/* III - VAT
Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%. */
let vat = 21;
function calculateVat(price) {
  return price * (vat / 100) + price;
}

console.log(calculateVat(50));

/* To calculate VAT, you need to:

Determine the net price (VAT exclusive price). Let's make it €50.
Find out the VAT rate. It will be 23% in our example. If expressed in percentages, divide it by 100. So it's 23 / 100 = 0.23.
To calculate the VAT amount: multiply the net amount by the VAT rate. €50 × 0.23 = €11.50.
To determine the gross price: take the VAT amount from Step 3 and add it to the VAT-exclusive price. You get the VAT inclusive: €50 + €11.50 = €61.50. */
