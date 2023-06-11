import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const addItems = galleryItems.map((item) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
    </a>
</li>`
).join('');

gallery.insertAdjacentHTML('afterbegin', addItems);

const instance = basicLightbox.create(`<img src="" alt="">`, {
    onShow: (instance) => {
        window.addEventListener('keydown', handleKeyPress);
        console.log('onShow', instance);
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', handleKeyPress);
        console.log('onClose', instance);
    },
});

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const largeImageUrl = event.target.dataset.source;
        instance.element().querySelector('img').setAttribute('src', largeImageUrl);
        instance.show();
    }
});

function handleKeyPress(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
};