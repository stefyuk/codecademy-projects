let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
const secretNumber = Math.floor(Math.random() * 10)
  return secretNumber
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if(Math.abs(userGuess - secretNumber) < Math.abs(computerGuess - secretNumber)) {
    return true; 
  } else if(Math.abs(userGuess - secretNumber) > Math.abs(computerGuess - secretNumber)) {
    return false;
  } else {
    return true;
  }
}

let updateScore = winner => {
 if(winner != 'human') {
   computerScore++; 
   } else { humanScore++
  }
};

const advanceRound = () => {
  if(true || false) {
  currentRoundNumber++ 
  }
}









