const lunches = ["Greens", "Corns", "Beans"];

function addLunchToEnd(menu, lunch) {
  menu.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return menu;
}

function addLunchToStart(menu, lunch) {
  menu.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return menu
}

function removeLastLunch(menu) {
  const lastItem = menu.pop();
  if (lastItem) {
    console.log(`${lastItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return menu;
}

function removeFirstLunch(menu) {
  const firstItem = menu.shift();
  if (firstItem) {
    console.log(`${firstItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return menu;
}

function getRandomLunch(menu) {
  const randomLunch = Math.floor(Math.random() * lunches.length);
  if (menu[randomLunch]) {
    console.log(`Randomly selected lunch: ${menu[randomLunch]}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(menu) {
  if (menu.length) {
    console.log(`Menu items: ${menu.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

showLunchMenu(["Greens", "Corns", "Beans"]);

