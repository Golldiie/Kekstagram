const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPictures = (photos, onPictureClick) => {
  const randomPictureFragment = document.createDocumentFragment();
  photos.forEach((randomPhoto) => {
    const randomPicture = pictureTemplate.cloneNode(true);
    randomPicture.dataset.photoId = randomPhoto.id;
    randomPicture.querySelector('.picture__img').src = randomPhoto.url;
    randomPicture.querySelector('.picture__img').alt = randomPhoto.description;
    randomPicture.querySelector('.picture__likes').textContent = randomPhoto.likes;
    randomPicture.querySelector('.picture__comments').textContent = randomPhoto.comments.length;

    randomPicture.addEventListener('click', () =>{
      onPictureClick(randomPhoto);
    });

    randomPictureFragment.appendChild(randomPicture);
  });

  picturesContainer.appendChild(randomPictureFragment);
};

export { renderPictures };

