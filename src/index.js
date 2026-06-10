import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (userAnswer, correctAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const runGame = (gameRules, getGameData, name) => {
  console.log(gameRules);
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    const userAnswer = askQuestion(question);
    
    if (!checkAnswer(userAnswer, correctAnswer, name)) {
      return false;
    }
  }
  
  return true;
};

export const startGame = (gameRules, getGameData) => {
  const name = askName();
  const success = runGame(gameRules, getGameData, name);
  
  if (success) {
    console.log(`Congratulations, ${name}!`);
  }
};

