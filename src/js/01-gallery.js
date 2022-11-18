// Add imports above this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    objekt =>
      `<li>
	<a class="gallery__item" href="${objekt.original}">
		<img class="gallery__image" src="${objekt.preview}" alt="${objekt.description}" />
	</a>
</li>`
  )
  .join('');

listEl.insertAdjacentHTML('afterbegin', markup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
