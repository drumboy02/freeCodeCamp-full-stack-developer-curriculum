function pyramid(ptrn, rows, isDown) {
  let returnString = '\n';
  let spaces = ' ';
  
  if (!isDown) {
    for (let i = 0; i < rows; i++) {
      returnString += spaces.repeat(rows - (i + 1)) + ptrn.repeat((i + 1) + i) + '\n';
    }
  } else {
    for (let i = 0; i < rows; i++) {
      returnString += spaces.repeat(i) + ptrn.repeat((rows - i) + (rows - (i + 1))) + '\n';
    }
  }

  return returnString;
}

console.log(pyramid('o', 4, false));
