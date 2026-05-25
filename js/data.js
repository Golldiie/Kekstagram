import { getRandomArrayElement, getRandomInteger} from './util.js';

const PHOTOS_COUNT = 25;
const commentsMinMax = {min: 0, max:30};
const likesMinMax = {min: 15, max: 200};
const avatarMinMax = {min: 1, max: 6};

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

const photoDescriptions = [
  'Котики на крыше',
  'Я РАБОТАЮЮЮ',
  'Productive girl :)',
  'Картина Солнечный кот. Продаю за 50000$(почти бесплатно)',
  'Купила цветочки',
  'Круто ем крутой хот-дог !!!',
  'Мле',
  'Попросил подравнять кончики',
  'Хочеш китика?',
  'Арбуз-арбуз, привет',
  'Лежу.балдежу',
  'Дедлайны горят? Да и фиг с ними! Мы в отпуске',
  'Мены...',
  'I love my job, I love my job, I love my job... ',
  'Whatever aesthetic',
  'Пусто',
  'Девочки, на завод!',
  'Смотрите чего умею',
  'Не знаю зачем',
  'Бывает же такое :0',
  'Офигенный, современный',
  'У меня самая лучшая работа!',
  'Я котек',
  'Шарик?',
  'Хоба'
];

const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createPhotoId = createIdGenerator();
const createCommentId = createIdGenerator();

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${ getRandomInteger(avatarMinMax.min, avatarMinMax.max) }.svg`,
  message: getRandomArrayElement(comments),
  name: getRandomArrayElement(commentatorsNames)
});

const createPhotoDescription = () => {
  const id = createPhotoId();
  return {
    id: id,
    url: `photos/${ id }.jpg`,
    description: photoDescriptions[id - 1],
    likes: getRandomInteger(likesMinMax.min, likesMinMax.max),
    comments: Array.from({length: getRandomInteger(commentsMinMax.min, commentsMinMax.max)}, createComment)
  };
};

const generatePhotos = () => Array.from({length: PHOTOS_COUNT}, createPhotoDescription);


export {generatePhotos};
