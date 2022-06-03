import { galleryItems } from './gallery-items.js'

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`)
instance.show()

// Change code below this line
console.log(galleryItems)

const refs = {
  gallery: document.querySelector('.gallery'),
  image: document.createElement('img'),
  href: document.querySelector('a'),
  lightbox: document.querySelector('.lightbox'),
}

const createGalleryItem = ({ preview, original, description }) =>
  `<div class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></div>`

const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  '',
)
refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup)

refs.gallery.addEventListener('click', onGalleryClick)

function onGalleryClick(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }
  instance.element().querySelector('img').src = e.target.dataset.source
  instance.show()
}
