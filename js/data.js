import { getRandomArrayElement, getRandomInteger} from './util.js';

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
  const id = createId();
  return {
    id: id,
    url: `photos/${ id }.jpg`,
    description: photoDescriptions[id - 1],
    likes: getRandomInteger(minLikes, maxLikes),
    comments: Array.from({length: getRandomInteger(0, MAX_COMMENTS)}, createComment)
  };
};

const generatePhotos = () => Array.from({length: PHOTOS_COUNT}, createPhotoDescription);
generatePhotos();

export {generatePhotos};
