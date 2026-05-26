import {generatePhotos} from './data.js';
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const randomPictureFragment = document.createDocumentFragment();


const renderPictures = () => {
  const randomPictures = generatePhotos();
  randomPictures.forEach((randomPhoto) => {
    const randomPicture = pictureTemplate.cloneNode(true);
    randomPicture.querySelector('.picture__img').src = randomPhoto.url;
    randomPicture.querySelector('.picture__img').alt = randomPhoto.description;
    randomPicture.querySelector('.picture__likes').textContent = randomPhoto.likes;
    randomPicture.querySelector('.picture__comments').textContent = randomPhoto.comments.length;
    randomPictureFragment.appendChild(randomPicture);
  });

  picturesContainer.appendChild(randomPictureFragment);
};

renderPictures();

export { renderPictures };

