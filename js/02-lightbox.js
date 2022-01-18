import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const cardsMarcup = createImageCardsMarcup(galleryItems);
console.log(cardsMarcup);

gallery.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageCardsMarcup(Items) {
    return Items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `
    }).join("");
};


gallery.addEventListener('click', (evt) => {
    evt.preventDefault();
});


new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});