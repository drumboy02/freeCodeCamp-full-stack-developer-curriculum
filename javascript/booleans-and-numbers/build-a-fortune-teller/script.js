let fortune1 = "Without a doubt.";
let fortune2 = "It is certain.";
let fortune3 = "Ask again later.";
let fortune4 = "Don't count on it.";
let fortune5 = "My sources say no.";

let randomNumber = Math.round(Math.random() * (5 - 1) + 1);

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
