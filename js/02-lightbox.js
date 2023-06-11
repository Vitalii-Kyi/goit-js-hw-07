import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const addItems = galleryItems.map((item) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
</li>`
).join('');

gallery.insertAdjacentHTML('afterbegin', addItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  caoptionDelay: 250,
  scrollZoom: true,
});
