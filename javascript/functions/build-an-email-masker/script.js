let email = "freecodecamp@example.com";

function maskEmail(email) {
  let index = email.indexOf("@");
  let stars = "*".repeat(index - 2);
  let slice = email.slice(index - 1);

  return email[0] + stars + slice;
}

console.log(maskEmail(email));
