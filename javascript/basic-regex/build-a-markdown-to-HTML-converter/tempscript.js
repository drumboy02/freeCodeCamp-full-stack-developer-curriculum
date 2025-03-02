const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

markdownInput.addEventListener('input', convertMarkdown);

const h1 = /^[\s]*#[\s](.+$)/gm;
const h2 = /^[\s]*##[\s](.+$)/gm;
const h3 = /^[\s]*###[\s](.+$)/gm;
const strong = /((?:\*|_){2})(.*?)\1/g;
const em = /(\*|_)(.*?)\1/g;
const img = /!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g;
const a = /\[(.*?)\]\(\s*(.*?)\s*\)/g
const blockquote = /^[\s]*> ([^\n]+?)$/gm;

function convertMarkdown() {
  let userInput = markdownInput.value;
  let html = userInput;

  html = html.replace(h1, (match, text) => `<h1>${text}</h1>`);
  html = html.replace(h2, (match, text) => `<h2>${text}</h2>`);
  html = html.replace(h3, (match, text) => `<h3>${text}</h3>`);
  html = html.replace(strong, (match, _, text) => `<strong>${text}</strong>`);
  html = html.replace(em, (match, _, text) => `<em>${text}</em>`);
  html = html.replace(img, (match, alt, src) => `<img src="${src}" alt="${alt}">`);
  html = html.replace(a, (match, text, url) => `<a href=${url}>${text}</a>`);
  html = html.replace(blockquote, (match, text) => `<blockquote>${text}</blockquote>`);

  htmlOutput.textContent = html;
  htmlPreview.innerHTML = html;

  return html;
}
