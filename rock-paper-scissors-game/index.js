const buttonsElement = document.querySelectorAll('button');

const resultElement = document.getElementById('result');

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttonsElement.forEach((button) => {
  button.addEventListener('click', () => {
    const result =  playRound(button.id, computerPlay());
    // console.log(result);
    // console.log(`Playerchoose ${button.id} Computer choose ${computerPlay()}`);
    resultElement.textContent = result;
    // updateScore(result);
  });
});

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! Both player and computer select the same element: ${playerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerPlay === 'paper')  
  ) {
    playerScore++;
    playerScoreElement.textContent = playerScore;
    return `You win! Player select ${playerSelection} which beats Computer selection of ${computerSelection}`;  
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    return `You lose! Computer select ${computerSelection} which beats player selection of ${playerSelection}`;
  };
}

// function updateScore(result) {
//  const playerScoreElement = document.getElementById('player-score');
//  const computerScoreElement = document.getElementById('computer-score');

//  playerScoreElement.textContent = `Player: ${playerScore}`;
//  computerScoreElement.textContent = `Computer: ${computerScore}`;

// }