const header = document.querySelector("[data-header]");
const fallbackImages = document.querySelectorAll("[data-fallback-image]");
const photoFlow = document.querySelector("[data-photo-flow]");
const photoTrack = document.querySelector("[data-photo-track]");
const mobileMedia = window.matchMedia("(max-width: 620px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updatePhotoFlow = () => {
  if (!photoFlow || !photoTrack || !mobileMedia.matches || reducedMotion.matches) {
    photoTrack?.style.removeProperty("--scroll-shift");
    return;
  }

  const rect = photoFlow.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
  const maxShift = Math.max(0, photoTrack.scrollWidth / 2 - photoFlow.clientWidth);
  const shift = -maxShift * progress;

  photoTrack.style.setProperty("--scroll-shift", `${shift}px`);
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
window.addEventListener("scroll", updatePhotoFlow, { passive: true });
window.addEventListener("resize", updatePhotoFlow);
updateHeader();
updatePhotoFlow();
