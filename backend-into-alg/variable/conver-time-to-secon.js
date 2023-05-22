/* V - conversion of time to seconds
Write an algorithm which receives the time of day in three different numbers, the hour, the minutes 
and the seconds and returns the number of seconds since midnight. */
const data = new Date();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();
console.log(hour, minutes, seconds);

const convertToSecond = (hour, minutes, seconds) => {
  return hour * 3600 + minutes * 60 + seconds;
};

console.log(convertToSecond(hour, minutes, seconds));
