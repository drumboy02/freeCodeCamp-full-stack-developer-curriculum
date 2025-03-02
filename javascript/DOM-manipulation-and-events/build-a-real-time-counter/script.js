const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const charString = charCount.textContent;

textInput.addEventListener('input', () => {
  let len = textInput.value.length;
  if (len >= 50) {
    len = 50;
    textInput.value = textInput.value.substring(0, len);
    charCount.style.color = "red";
    charCount.textContent = charString.replace("0", len);
  } else {
    charCount.style.color = 'hsl(150, 40%, 30%)';
    charCount.textContent = charString.replace("0", len);
  }
});