const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
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

const PHOTOS_COUNT = 25;

const getRandomInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    let currentValue = getRandomInteger(min, max);

    while(previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generatedPhotoId = createIdGenerator(1, 25);
const generatedCommentId = createIdGenerator(1,1000);
const generatedImageId = createIdGenerator(1,25);


const createComment = () => ({
  id: generatedCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});

const createPhotoDescription = () => ({
  id: generatedPhotoId(),
  url: `photos/${ generatedImageId() }.jpg`,
  description:'random photo',
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1,30)}, createComment)
});

const getRecommendationList = () => Array.from({length: PHOTOS_COUNT}, createPhotoDescription);
getRecommendationList();
