const header = document.querySelector("[data-header]");
const fallbackImages = document.querySelectorAll("[data-fallback-image]");
const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

fallbackImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("is-missing");
  });

  if (image.complete && image.naturalWidth === 0) {
    image.classList.add("is-missing");
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
