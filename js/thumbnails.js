const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPictures = (photos, onPictureClick) => {
  const picturesListFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoTemplate = pictureTemplate.cloneNode(true);
    photoTemplate.dataset.photoId = photo.id;
    photoTemplate.querySelector('.picture__img').src = photo.url;
    photoTemplate.querySelector('.picture__img').alt = photo.description;
    photoTemplate.querySelector('.picture__likes').textContent = photo.likes;
    photoTemplate.querySelector('.picture__comments').textContent = photo.comments.length;

    photoTemplate.addEventListener('click', () =>{
      onPictureClick(photo);
    });

    picturesListFragment.appendChild(photo);
  });

  picturesContainer.appendChild(picturesListFragment);
};

export { renderPictures };

