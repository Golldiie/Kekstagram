const PHOTOS_COUNT = 25;
const MAX_COMMENTS = 30;
const minLikes = 15;
const maxLikes = 200;
const avatarCount = 6;

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentatorsNames = [
  'Mia',
  'Ingiborga',
  'Duduka',
  'ValentinO',
  'Sasha123',
  'Cheremsha',
  'Manna',
  'Nikita228',
  'Nataha',
  'Ars',
  'nails_43',
  'VaNYA',
  'Sveta78'
];

const getRandomInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createId = createIdGenerator();

const createComment = () => {
  const createCommentId = createId();
  return {
    id: createCommentId(),
    avatar: `img/avatar-${ getRandomInteger(1, avatarCount) }.svg`,
    message: getRandomArrayElement(comments),
    name: getRandomArrayElement(commentatorsNames)
  };
};

const createPhotoDescription = () => {
  const createPhotoId = createId();
  const createLinkId = createId();
  return {
    id: createPhotoId(),
    url: `photos/${ createLinkId() }.jpg`,
    description:'random photo', //array descriptions
    likes: getRandomInteger(minLikes, maxLikes),
    comments: Array.from({length: getRandomInteger(0, MAX_COMMENTS)}, createComment)
  };
};

const getRecommendationList = () => Array.from({length: PHOTOS_COUNT}, createPhotoDescription);
getRecommendationList();
