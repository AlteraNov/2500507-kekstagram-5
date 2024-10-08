const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Артем',
  'Алексей',
  'Ольга',
  'Иван',
  'Елена',
  'Дмитрий',
  'Анна',
  'Максим',
  'Светлана',
  'Сергей',
  'Мария'
];
const DESCRIPTIONS = [
  'Солнечный день',
  'Мгновение счастья.',
  'Прекрасный день.',
  'Улыбка на лице.',
  'Красивая природа вокруг.',
  'Динамика жизни в повседневности.',
  'Теплые воспоминания.',
  'Светлые оттенки повседневной жизни.',
  'Радость общения в любом формате.',
  'Минимальные детали, обыденное счастье.',
  'Интересный штрих в мозаике жизни.',
  'Неожиданная красота вокруг нас.',
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
function generateComments(){
  const comentCount = getRandomInteger(0,30);
  const coments = [];
  for (let i = 0; i < comentCount; i++){
    const coment = {
      id: i + 1,
      avatar: 'img/avatar-{getRandomInteger(1,6)}.svg',
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name:NAME[getRandomInteger(0,NAME.length - 1)],
    };
    coments.push(coment);
  }
  return coments;
}
function generatePhotos(){
  const photos = [];
  for(let i = 1; i <= 25;i++){
    const photo = {
      id: i,
      url:'photos/{i}.jpg',
      description:DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      likes:getRandomInteger(15,200),
      comments:generateComments(),
    };
    photos.push(photo);
  }
  return photos;
}
generatePhotos();
