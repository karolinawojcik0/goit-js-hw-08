// Import the SimpleLightbox class installed via npm
import SimpleLightbox from 'simplelightbox';
// Import the CSS style for SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';
// Import the array of objects with gallery data
import { galleryItems } from './gallery-items';

// Select the list element where gallery items will be added
const ulGallery = document.querySelector('.gallery');

// Create list items based on data from the galleryItems array
const liGallery = galleryItems.map(item => `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>
  </li>`
).join('');

// Set the created elements inside the list element
ulGallery.innerHTML = liGallery;

// Initialize SimpleLightbox with selected options
const lightboxOptions = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
};

const lightBox = new SimpleLightbox('.gallery li a', lightboxOptions);
