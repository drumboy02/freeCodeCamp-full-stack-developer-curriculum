const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

markdownInput.addEventListener('input', convertMarkdown);

function convertMarkdown() {
  let userInput = markdownInput.value
  let html = ``;
  let element = ``;
  let matches = [];

  const heading = /^(#{1,3}\s)(\w*\s?)*\n?$/gm;
  const strong = /^(.*\s)?(\*{2})(.*)(\*{2})$|^(_{2}).*(_{2})\n?$/gm;
  const em = /^(.*\s)?(\*)(.*)(\*)$|^(_).*(_)\n?$/gm;
  const img = /^(!\[)(.*)\](\()(.*)\)\n?$/gm;
  const link = /^(\[)(.*)\](\()(.*)\)\n?$/gm;
  const blockquote = /^\n?(\s*?>\s).*\n?$/gm;

  if (userInput.match(heading)) {
    element = `<h1></h1>`;
    matches = userInput.match(heading);
    // console.log("heading:", matches);
    matches.forEach((match, i) => {
      console.log(i, match);
      /*
      let len = matches[i].length;
      console.log("len:", len);
      element = `<h1>${match.replaceAll("#", "").trimStart()}</h1>\n`
      html += element;
      */
    });
  } else if (userInput.match(strong)) {
    element = `<strong></strong>`;
    matches = userInput.match(strong);
    // console.log("strong:", matches);
  } else if (userInput.match(em)) {
    element = `<em></em>`;
    matches = userInput.match(em);
    // console.log("em:", matches);
  } else if (userInput.match(img)) {
    element = `<img alt="" src="">`;
    matches = userInput.match(img);
    // console.log("img:", matches);
  } else if (userInput.match(link)) {
    element = `<a href=""></a>`;
    matches = userInput.match(link);
    // console.log("a:", matches);
  } else if (userInput.match(blockquote)) {
    element = `<blockquote></blockquote>`;
    matches = userInput.match(blockquote);
    // console.log("blockquote:", matches);
  }

  matches.forEach((match, i) => {
      console.log(i, match);
  });
  /*
  if (heading.test(userInput)) {
    console.log("heading:", userInput);

    const len = userInput.match(heading)[0].length - 1;
    output = userInput.replaceAll("#", "").trim();

    if (len === 1) {
      html = `<h1>${output}</h1>`;
    } else if (len === 2) {
      html = `<h2>${output}</h2>`;
    } else {
      html = `<h3>${output}</h3>`;
    }
    
  } else if (strong.test(userInput)) {
    console.log("strong:", userInput);
    output = userInput.replaceAll(/\*|_/g, "");
    html = `<strong>${output}</strong>`;

  } else if (em.test(userInput)) {
    console.log("em:", userInput);
    output = userInput.replaceAll(/\*|_/g, "");
    html = `<em>${output}</em>`;

  } else if (img.test(userInput)) {
    console.log("img:", userInput);
    output = userInput.replaceAll(/\(|\)|\[.*\]|!/g, "");
    let alt = userInput.replaceAll(/!|\[|\]|\(.*\)/g, "");
    html = `<img alt="${alt}">${output}</img>`;

  } else if (link.test(userInput)) {
    console.log("link:", userInput);
    output = userInput.replaceAll(/\[|\]|\(.*\)/g, "");
    let href = userInput.replaceAll(/\(|\)|\[.*\]/g, "");
    html = `<a href="${href}">${output}</a>`

  } else if (blockquote.test(userInput)) {
    console.log("blockquote:", userInput);
    output = userInput.replaceAll(">", "").trim();
    html = `<blockquote>${output}</blockquote>`;

  }
  */

  htmlOutput.textContent = html;
  htmlPreview.innerHTML = html;

  return html;
}
