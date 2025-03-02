const questions = [
  new question("Geography", "What is the capital of France?", ["Berlin", "Madrid", "Paris"], "Paris"),
  new question("Geography", "Which continent is Brazil located in?", ["Africa", "South America", "Asia"], "South America"),
  new question("Science", "What is the chemical symbol for water?", ["CO2", "H2O", "NaCl"], "H2O"),
  new question("Science", "What planet is known as the Red Planet?", ["Venus", "Mars", "Jupiter"], "Mars"),
  new question("History", "Who was the first president of the United States?", ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], "George Washington"),
]

function question(category, question, choices, answer) {
  this.category = category;
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

function getRandomQuestion(questions) {
  let randomQuestion = Math.floor(Math.random() * questions.length);
  return questions[randomQuestion];
}

function getRandomComputerChoice(choices) {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function getResults(question = getRandomQuestion(questions), choice = getRandomComputerChoice(question.choices)) {
  if (choice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

console.log(getResults());

