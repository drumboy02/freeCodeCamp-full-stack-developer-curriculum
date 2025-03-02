const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

markdownInput.addEventListener('input', convertMarkdown);

const h1 = /^[\s]*#[\s](.+$)/gm;
const h2 = /^[\s]*##[\s](.+$)/gm;
const h3 = /^[\s]*###[\s](.+$)/gm;
const strong = /\*\*(.+?)\*\*/g; // Matches **...**
const em = /\*([^\s*][^*]*[^\s*])\*/g; // Matches *text* with content, no leading/trailing spaces
const img = /!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g;
const a = /\[(.*?)\]\(\s*(.*?)\s*\)/g;
const blockquote = /^[\s]*>[\s]([^\n]+)$/gm;

function convertMarkdown() {
  let userInput = markdownInput.value;
  let html = userInput;

  // Helper function to process nested markdown
  function processInnerMarkdown(text) {
    let result = text;
    console.log("Initial:", result);
    // First, handle italic (*text*), ensuring valid content between stars
    result = result.replace(em, (match, content) => `<em>${content}</em>`);
    console.log("After em:", result);
    // Then, handle bold (**...**), which can include <em> tags
    result = result.replace(strong, (match, content) => `<strong>${content}</strong>`);
    console.log("After strong:", result);
    return result;
  }

  // Process blockquotes first, handling inner markdown
  html = html.replace(blockquote, (match, text) => {
    const processedText = processInnerMarkdown(text);
    return `<blockquote>${processedText}</blockquote>`;
  });

  // Then process other top-level elements
  html = html.replace(h1, (match, text) => `<h1>${text}</h1>`);
  html = html.replace(h2, (match, text) => `<h2>${text}</h2>`);
  html = html.replace(h3, (match, text) => `<h3>${text}</h3>`);
  html = html.replace(strong, (match, text) => `<strong>${text}</strong>`);
  html = html.replace(em, (match, text) => `<em>${text}</em>`);
  html = html.replace(img, (match, alt, src) => `<img src="${src}" alt="${alt}">`);
  html = html.replace(a, (match, text, url) => `<a href="${url}">${text}</a>`);

  htmlOutput.textContent = html; // For debugging
  htmlPreview.innerHTML = html;  // Renders the HTML
}