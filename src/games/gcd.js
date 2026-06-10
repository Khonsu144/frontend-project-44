// Функция для нахождения НОД (алгоритм Евклида)
const findGCD = (a, b) => {
  let first = Math.abs(a);
  let second = Math.abs(b);
  
  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  
  return first;
};

// Функция для получения случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  
  return [question, correctAnswer];
};

export const gameRules = 'Find the greatest common divisor of given numbers.';

