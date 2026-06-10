const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерация арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

// Создание вопроса со скрытым элементом
const createQuestion = (progression, hiddenIndex) => {
  const questionArray = [...progression];
  questionArray[hiddenIndex] = '..';
  return questionArray.join(' ');
};

export const getGameData = () => {
  // Параметры прогрессии
  const minLength = 5;
  const maxLength = 10;
  const length = getRandomNumber(minLength, maxLength);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  
  // Генерация прогрессии
  const progression = generateProgression(start, step, length);
  
  // Выбор случайного элемента для скрытия
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  // Создание вопроса
  const question = createQuestion(progression, hiddenIndex);
  
  return [question, correctAnswer];
};

export const gameRules = 'What number is missing in the progression?';

