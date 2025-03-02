const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

markdownInput.addEventListener('input', convertMarkdown);

function convertMarkdown() {
  let userInput = markdownInput.value
  let html = ``;
  let backspace = null;

  const heading = /(?<hash>#{1,3})\s(?<text>.*\n?)/g;
  const strong = /(?<sym1>\*{2}|_{2})(?<text>.*)(?<sym2>\*{2}|_{2})(?<bsp>\n?)/g;
  const em = /^(.*\s)?(\*)(.*)(\*)$|^(_).*(_)\n?$/g;
  const img = /^(!\[)(.*)\](\()(.*)\)\n?$/g;
  const link = /^(\[)(.*)\](\()(.*)\)\n?$/g;
  const blockquote = /^\n?(\s*?>\s).*\n?$/g;

  if (userInput.match(heading)) {
    let all = userInput.matchAll(heading);
    for (let match of all) {
      let hash = match.groups.hash;
      // console.log("hash:", hash);
      let text = match.groups.text;
      // console.log("text:", text);
      let element = ``;

      if (text.includes("\n")) {
        text = text.replace("\n", "");
        backspace = true;
      }

      if (hash.length === 1) {
        element = `<h1>${text}</h1>`;
      } else if (hash.length === 2) {
        element = `<h2>${text}</h2>`;
      } else {
        element = `<h3>${text}</h3>`;
      }
      if (backspace) element += "\n";

      html += element; 
    }
  } else if (userInput.match(strong)) {
    let all = userInput.matchAll(strong);
    for (let match of all) {
      let text = match.groups.text;
      // let sym1 = match.groups.sym1;
      // let sym2 = match.groups.sym2;
      let element = ``;
      if (match.groups.bsp) backspace = true;

      element = `<strong>${text}</strong>`;
      if (backspace) element += "\n";

      html += element;
    }
  }

  htmlOutput.textContent = html;
  htmlPreview.innerHTML = html;

  return html;
}