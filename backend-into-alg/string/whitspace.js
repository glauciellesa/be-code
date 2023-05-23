/* V - whitespace
Write a function which receives a sentence full of whitespace and returns it without them. */

function removeWhitespace(name) {
  let splitName = name.split(" ");
  console.log(splitName.join(""));
}

removeWhitespace(" B R A Z I L ");
