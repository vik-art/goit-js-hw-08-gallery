import images from "./gallery-items.js";
const galleryContainerRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const createGalleryItems = galleryMarkup(images);
const lightboxImageRef = document.querySelector(".lightbox__image");
const closeButtonRef = document.querySelector(".lightbox__button");
galleryContainerRef.insertAdjacentHTML("beforeend", createGalleryItems);
function galleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join(" ");
}
galleryContainerRef.addEventListener("click", openModal);
function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  lightboxRef.classList.add("is-open");
  lightboxImageRef.src = e.target.dataset.source;
  lightboxImageRef.alt = e.target.alt;
}
closeButtonRef.addEventListener("click", closeModal);
function closeModal(e) {
  lightboxRef.classList.remove("is-open");
  lightboxRef.src = "";
}
