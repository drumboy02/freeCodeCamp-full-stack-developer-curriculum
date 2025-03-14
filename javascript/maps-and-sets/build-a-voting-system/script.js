const poll = new Map();

const addOption = (option) => {
  if (!option) return `Option cannot be empty.`;  
  return !poll.has(option) ?
  (poll.set(option, new Set()), `Option "${option}" added to the poll.`) :
  `Option "${option}" already exists.`;

}

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
  } else {
    return poll.get(option).has(voterId) ?
    `Voter ${voterId} has already voted for "${option}".` :
    (poll.get(option).add(voterId), `Voter ${voterId} voted for "${option}".`);
  }
}

console.log(addOption('cake'));
console.log(addOption('candy'));
console.log(addOption('chocolate'));
console.log(vote('cake', 'cake eater'));
console.log(vote('candy', 'candy lover'));
console.log(vote('chocolate', 'chocoholic'));
console.log(vote('candy', 'candy lover'));

const displayResults = () => {
  let returnStr = `Poll Results:`;
  poll.forEach((value, key) => {
    returnStr += `\n${key}: ${value.size} votes`;
  })

  return returnStr;
}

console.log(displayResults());
