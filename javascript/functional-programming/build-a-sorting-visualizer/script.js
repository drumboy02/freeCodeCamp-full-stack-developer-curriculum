const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");

generateBtn.addEventListener("click", () => {
  startingArray.innerHTML = '';
  const selectDivs = arrayContainer.querySelectorAll("div:not([id])");
  selectDivs.forEach(div => div.remove());
  fillArrContainer(startingArray, generateArray());
})

sortBtn.addEventListener("click", () => {
  if (!startingArray.innerHTML) return;

  const arr = [];
  Object.values(startingArray.children).forEach(obj => arr.push(parseInt(obj.textContent)));

  let sorted = false;
  let len = arr.length - 1;
  highlightCurrentEls(startingArray);

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < len; i++) {
      if (!isOrdered(arr[i], arr[i + 1])) {
        sorted = false;
        swapElements(arr, i);
      } 
      if (i === len - 1) {
        highlightCurrentEls(arrayContainer.appendChild(fillArrContainer(generateContainer(), arr)));
      } else {
        highlightCurrentEls(arrayContainer.appendChild(fillArrContainer(generateContainer(), arr)), i + 1);
      }
    }
  }

  const lastDiv = arrayContainer.lastElementChild;
  const removeStyles = lastDiv.querySelectorAll("span[style]");
  removeStyles.forEach(span => span.removeAttribute("style"));
  lastDiv.style.border = "4px solid green";
})

const generateElement = () => {
  // return random integer between 1 and 100, inclusive
  return Math.ceil(Math.random() * 100);
}

const generateArray = () => {
  // use generateElement to return array with 5 random integers
  const array = [];
  for (let i = 0; i < 5; i++) {
    array[i] = generateElement();
  }
  return array;
}

const generateContainer = () => {
  // create and return empty div
  const div = document.createElement("div");
  return div;
}

const fillArrContainer = (htmlEl, array) => {
  // fill htmlEl with 5 span elements with each num in array
  for (let i = 0; i < 5; i++) {
    const span = htmlEl.appendChild(document.createElement("span"));
    span.textContent = array[i];
  }

  return htmlEl;
}

const isOrdered = (intA, intB) => {
  // return boolean intA <= intB
  return intA <= intB;
}

const swapElements = (array, index=0) => {
  // modify array in place swapping num at index and 
  // following num if isOrdered false
  if (!isOrdered(array[index], array[index + 1]) && array[index + 1]) {
    let swap = array[index];
    array[index] = array[index + 1];
    array[index + 1] = swap;
  }
  return array;
}

const highlightCurrentEls = (htmlEl, index=0) => {
  // set border of htmlEl child at index, and child after index
  // to dashed red
  htmlEl.children[index].style.border = "2px dashed red";
  htmlEl.children[index + 1].style.border = "2px dashed red";

  return htmlEl
}
