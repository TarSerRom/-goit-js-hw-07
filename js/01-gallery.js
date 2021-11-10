import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItems(galleryItems);

const modalEl = document.querySelector('.basicLightbox');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onItemClick);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
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
    }).join('');
  
       
}

function onItemClick(event) {
    console.log(event.target);
  event.preventDefault();
  
  modalEl.classList.add('is-visible');

}
