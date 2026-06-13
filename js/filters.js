import { renderPictures } from './thumbnails';

const filtersSection = document.querySelector('.img-filters');

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');


const showFilters = function(){
  filtersSection.classList.remove('img-filters--inactive');
};


const initPhotos = function(photos){
  filterDefaultButton.addEventListener('click', () => {
    renderPictures(photos);
  });

  filterRandomButton.addEventListener('click', () => {
    const randomPhotos = photos.slice();
    randomPhotos.slice(0, 10);
    renderPictures(randomPhotos);
  });

  filterDiscussedButton.addEventListener('click', () => {

  });
};

export { showFilters, initPhotos };
