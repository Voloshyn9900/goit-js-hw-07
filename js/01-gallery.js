import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createGalleryItemsMurkup(galleryItems);

galleryEl.addEventListener("click", onImgClick);


function createGalleryItemsMurkup(galleryItems) {
    return galleryItems.map((item) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.preview}"
        />
        </a>
        </li>`; 
    }).join("");
}

function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
      return;
    }
    console.log(e.target);
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
    document.addEventListener("keydown", (event) => {
      if (event.key == "Escape") {
        instance.close();
      }
    });
}

console.log(createGalleryItemsMurkup(galleryItems));







