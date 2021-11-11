import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItems(galleryItems);


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

function onItemClick(e) {
  e.preventDefault();

  if (e.target.localName !== "img") {
    return;
  }
  
  console.log(e.target.dataset.source);
  
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">`)

    instance.show()

}
