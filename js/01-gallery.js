import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

const cardsMarcup = createImageCardsMarcup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageCardsMarcup(Items) {
    return Items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join("");
};


gallery.addEventListener('click', onImageContainerclick);

function onImageContainerclick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return
    };

    displaysModal(evt.target.dataset.source);
};

function displaysModal(image) {
    basicLightbox.create(`
		<img width="1400" height="900" src="${image}">
	`).show();
}
