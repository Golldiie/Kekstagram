const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPictures = (photos, onPictureClick) => {
  const photosListFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.dataset.photoId = photo.id;
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').alt = photo.description;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    photoElement.addEventListener('click', () =>{
      onPictureClick(photo);
    });

    photosListFragment.appendChild(photoElement);
  });

  picturesContainer.appendChild(photosListFragment);
};

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');

  pictures.forEach((picture) => picture.remove());
};

export { renderPictures, clearPictures };

