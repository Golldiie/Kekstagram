import { createElementClass } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = document.querySelector('.big-picture__cancel');

const commentsShownCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');

const commentsLoader = bigPicture.querySelector('.comments-loader');

let shownCommentsCount = 0;
let currentComments = [];

const createCommentElement = (comment) => {
  const commentElement = createElementClass('li','social__comment');

  const avatar = createElementClass('img', 'social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = 35;
  avatar.height = 35;

  const text = createElementClass('p', 'social__text');
  text.textContent = comment.message;

  commentElement.append(avatar, text);

  return commentElement;
};

const renderComments = (comments) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';

  const visibleComments = comments.slice(0, shownCommentsCount);

  visibleComments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsList.appendChild(commentElement);
  });

  commentsShownCount.textContent = visibleComments.length;
  commentsTotalCount.textContent = comments.length;

  if (shownCommentsCount >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const openBigPicture = function(photo){
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.big-picture__img img').alt = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  shownCommentsCount = 5;
  currentComments = photo.comments;
  commentsTotalCount.textContent = photo.comments.length;
  renderComments(currentComments);
  bigPicture.querySelector('.social__caption').textContent = photo.description;
};

commentsLoader.addEventListener('click', () => {
  shownCommentsCount += 5;

  renderComments(currentComments);
});

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');
};

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape' && !bigPicture.classList.contains('hidden')){
    evt.preventDefault();
    closeBigPicture();
  }
};

document.addEventListener('keydown', onDocumentKeydown);

closeBigPictureButton.addEventListener('click', () => {
  closeBigPicture();

  document.removeEventListener('keydown', onDocumentKeydown);
});


export { openBigPicture };
