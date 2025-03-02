function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const charsLen = chars.length;
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomChar = chars.charAt(Math.floor(Math.random() * charsLen));
    password += randomChar;
  }

  return password;
}

const password = generatePassword(10);
console.log("Generated password: " + password);
