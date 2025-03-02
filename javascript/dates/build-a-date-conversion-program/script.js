const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };

  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleString("en-US", options)}`;
}

console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  return `Formatted Date (Month Day, Year): ${date.toLocaleString("en-US", options)}`;
}

console.log(formatDateLong(currentDate));
