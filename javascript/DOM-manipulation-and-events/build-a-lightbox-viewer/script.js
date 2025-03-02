const gallery = document.querySelector(".gallery");
const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close");
const lightboxImage = document.getElementById("lightbox-image");

gallery.addEventListener('click', (event) => {
  let fullImage = event.target.src.replace("-thumbnail", "");
  lightbox.style.display = "flex";
  lightboxImage.src = fullImage;
});

closeBtn.addEventListener('click', () => lightbox.style.display = "none");

lightbox.addEventListener('click', () => lightbox.style.display = "none");
