/* V - convert name
Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe" */

function convert(name) {
  let split = name.split(",");
  console.log(`${split[1]} ${split[0]}`);
}

convert("Doe, John");
