const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');

const renderComments = function(comments){
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    const avatar = document.createElement('img');
    avatar.classList.add('social__picture');
    avatar.width = 35;
    avatar.height = 35;
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;
    commentElement.append(avatar, text);
    commentsList.appendChild(commentElement);
  });
};


const openBigPicture = function(photo){
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.big-picture__img img').alt = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  renderComments(photo.comments);
  bigPicture.querySelector('.social__caption').textContent = photo.description;
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');
};

closeBigPictureButton.addEventListener('click', () => {
  closeBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape' && !bigPicture.classList.contains('hidden')){
    closeBigPicture();
  }
});

export { openBigPicture };
