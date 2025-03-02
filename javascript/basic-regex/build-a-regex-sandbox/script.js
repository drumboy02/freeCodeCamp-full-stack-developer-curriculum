const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (globalFlag.checked) flags += "g";
  if (caseInsensitiveFlag.checked) flags += "i";

  return flags;
}

testButton.addEventListener('click', () => {
  let flags = getFlags();
  let userInput = stringToTest.textContent;
  let pattern = new RegExp(regexPattern.value, flags);

  testResult.textContent = '';
  for (let i = 0; i < stringToTest.children.length; i++) {
    stringToTest.children[i].classList.remove("highlight");
  }

  let matched;
  let replaced = [];
  
  console.log(`userInput: ${userInput}\n`);

  function renderResult() {
    let result = ``;
    let split = userInput.split('');
    
    if (globalFlag.checked) {
      matched = userInput.matchAll(pattern);

      for (let matches of matched) {        
        result += `${matches}, `;
        replaced.push({"match": matches[0], "index": matches.index, "span": highlight(matches[0])})
      }

      replaced.forEach(obj => {
        for (let i = 0; i < obj.match.length; i++) {
          split[obj.index + i] = '';
        }
        split[obj.index] = obj.span;
      })

      // console.log("split:", split);
      stringToTest.innerHTML = split.join('');
      result = result.slice(0, result.lastIndexOf(","));

      !result ? 
      (testResult.textContent = "no match", stringToTest.innerHTML = userInput) :
      testResult.textContent = result;

    } else { 
      matched = userInput.match(pattern);

      !matched ? 
      (testResult.textContent = "no match", stringToTest.innerHTML = userInput) : 
      (testResult.textContent = matched[0], stringToTest.innerHTML = stringToTest.innerHTML.replace(matched[0], highlight(matched[0])));
    }
  }

  function highlight(match) {
    let output = ``
    let span = `<span class="highlight">`;

    span += `${match}</span>`;
    output = span;

    return output;
  }

  renderResult();
  console.log("\noutput:", stringToTest.innerHTML);
});