import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerySortItems = ({ preview, original, description }) => {
  return `
    <li>
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  </li>
  `;
};

const gallerySortMarkup = galleryItems.map(gallerySortItems).join('');

const galleryItemsList = document.querySelector(".gallery");

galleryItemsList.insertAdjacentHTML('beforeend', gallerySortMarkup);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox',  {
    caption: true,
    captionsData: alt,
    captionDelay: 250,

});