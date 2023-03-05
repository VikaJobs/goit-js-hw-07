import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryEl = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryEl);
function createGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `  
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
