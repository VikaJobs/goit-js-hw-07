import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryEl = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryEl);
gallery.addEventListener("click", onLinkClick);
function createGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item"> 
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
    </a>
    </div>`;
    })
    .join("");
}

function onLinkClick(ev) {
  ev.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${ev.target.dataset.source}">`
  );
  instance.show();
}
