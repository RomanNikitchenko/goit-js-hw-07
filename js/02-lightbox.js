import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const cardsMarcup = createImageCardsMarcup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageCardsMarcup(Items) {
    return Items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join("");
};


var lightbox = new SimpleLightbox('.gallery a', onImageContainerclick);

gallery.addEventListener('click', lightbox);

function onImageContainerclick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return
    };
};


