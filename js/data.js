import {getRandomInteger, getUniqNumber, generateArray} from './util.js';

const photosId = generateArray(25,25);
const usersId = generateArray(25,25);
const NUMBERS_OF_PHOTO = 25;
const NUMBERS_OF_POSTS = 10;


const NAMES = [
  'Петя',
  'Валя',
  'Игорь',
  'Никита',
  'Настя',
  'Яна',
  'Олег',
  'Виктор'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Тут могла быть ваша реклама.',
  'Если я в чем то сомневаюсь, я возвращаюсь к началу.',
  'Это ведь так весело, правда? Правила нарушать.',
  'Я личность! Понятно? Бесформенная, но личность!',
  'Ну это уж совсем не доказательство…'
];

const getComment = () => ({
  id: getUniqNumber(usersId),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: MESSAGES[getRandomInteger(0, 1)],
  name: NAMES[getRandomInteger(0,NAMES.length-1)]
});

const getPhoto = () => ({
  id: photosId[getRandomInteger(1,NUMBERS_OF_PHOTO-1)],
  url: `photos/${getRandomInteger(1,NUMBERS_OF_PHOTO-1)}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length-1)],
  likes:getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, NUMBERS_OF_POSTS) }, getComment)
});

const getPosts = () => Array.from({length: NUMBERS_OF_PHOTO}, getPhoto);

export {getPosts};

