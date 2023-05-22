/* IV - day’s number
Write an algorithm which given the number of a day returns its name. */

const printDay = () => {
  const date = new Date();
  const day = date.getDay();
  switch (day) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 3:
      return "Tuesday";

    case 4:
      return "Wednesday";

    case 5:
      return "Thursday";

    case 6:
      return "Friday";

    case 7:
      return "Saturday";

    default:
      return "No a valid day";
  }
};
console.log(printDay());
