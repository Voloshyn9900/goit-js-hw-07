import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createGalleryItemsMurkup(galleryItems);

// galleryEl.addEventListener("click", onImgClick);

function createGalleryItemsMurkup(galleryItems) {
  return galleryItems
    .map((item) => {
        return `
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`;
    }).join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: 250,
});

console.log(createGalleryItemsMurkup(galleryItems));





