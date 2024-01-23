// import the SimpleLightbox class installed via npm
import SimpleLightbox from 'simplelightbox';
// import the CSS style for SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';
// import the array of objects with gallery data
import { galleryItems } from './gallery-items';

// select the list element where gallery items will be added
const ulGallery = document.querySelector('.gallery');

// create list items based on data from the galleryItems array
const liGallery = galleryItems.map(item => `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>
  </li>`
).join('');

// set the created elements inside the list element
ulGallery.innerHTML = liGallery;

// initialize SimpleLightbox with selected options
const lightboxOptions = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
};

const lightBox = new SimpleLightbox('.gallery li a', lightboxOptions);
