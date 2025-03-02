function getAverage(scores) {
  let average = 0;
  for (let score of scores) {
    average += score;
  }
  average = average / scores.length;

  return average;
}

function getGrade(score) {
  let grade = "";
  if (score <= 59) {
    grade = "F";
  } else if (score < 70) {
    grade = "D";
  } else if (score < 80) {
    grade = "C";
  } else if (score < 90) {
    grade = "B";
  } else if (score < 100) {
    grade = "A";
  } else {
    grade = "A+";
  }

  return grade;
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade === "F" ?
  false : true;
}

function studentMsg(scores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  }
}

const scores = [60, 70, 80, 90, 100];
const average = getAverage(scores);
console.log("average: " + average);

const grade = getGrade(average);
console.log("grade: " + grade);

const pass = hasPassingGrade(average);
console.log("pass: " + pass);

const message = studentMsg(scores, scores[5]);
console.log("message: " + message);
