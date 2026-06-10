const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция проверки, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

export const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  
  return [question, correctAnswer];
};

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

