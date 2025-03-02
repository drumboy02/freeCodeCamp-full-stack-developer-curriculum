const drumMachine = document.getElementById("drum-machine");
const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");
const pads = padBank.querySelectorAll(".drum-pad");

const keyMap = {};

pads.forEach(pad => {
  const audio = pad.querySelector(".clip");
  const clip = audio.src.split("/")[5];
  keyMap[audio.id] = document.getElementById(audio.id);

  pad.addEventListener("click", () => {
    pad.style.color = "#f00";
    setTimeout(() => pad.style.color = "#fff", "250");
    display.textContent = clip;
    audio.play();
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (keyMap[key]) {
    const audio = keyMap[key];
    const clip = audio.src.split("/")[5];
    const pad = document.querySelector(`#${clip.split(".")[0]}`);
    pad.style.color = "#f00";
    setTimeout(() => pad.style.color = "#fff", 250);
    display.textContent = clip;
    audio.play();
  }
});
