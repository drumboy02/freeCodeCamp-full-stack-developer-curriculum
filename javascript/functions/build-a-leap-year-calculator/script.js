const year = "1984";

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0) {
    return year % 400 === 0 ? 
    `${year} is a leap year.` : `${year} is not a leap year.`;
  } else {
    return year % 4 === 0 ? 
    `${year} is a leap year.` : `${year} is not a leap year.`;
  }
}

const result = isLeapYear(year);
console.log(result);
