const hearts = document.querySelectorAll('.favorite-icon');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.className.includes("filled")) {
      heart.classList.remove("filled");
      heart.innerHTML = "&#9825;";
    } else {
      heart.classList.add("filled");
      heart.innerHTML = "&#10084;";
    }
  });
});

