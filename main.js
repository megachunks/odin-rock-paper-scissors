let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) return "rock";
  if (randomNumber === 2) return "paper";
  if (randomNumber === 3) return "scissors";
}

function winRound() {
  displayResults("You win!");
  humanScore++;
  return;
}
function loseRound() {
  displayResults("You lose!");
  computerScore++;
  return;
}

function playRound(playerSelection) {
  let humanChoice = playerSelection.toLowerCase();
  let computerChoice = getComputerChoice();

  displayResults(
    "You picked " + humanChoice + " and the computer picked " + computerChoice,
  );

  if (humanChoice === computerChoice) {
    updateGameResults();
    displayResults("Tie! Haha...");
    return;
  }
  if (computerChoice === "rock") {
    humanChoice === "paper" ? winRound() : loseRound();
  }
  if (computerChoice === "paper") {
    humanChoice === "scissors" ? winRound() : loseRound();
  }
  if (computerChoice === "scissors") {
    humanChoice === "rock" ? winRound() : loseRound();
  }

  updateGameResults();
  haveAWinner();
  return;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    displayResults("ROUND " + i);
    playRound();
    displayResults(
      "Current scores human vs computer: " + humanScore + " " + computerScore,
    );
  }
  if (humanScore === computerScore) displayResults("GAME: ITS A TIE");
  humanScore > computerScore
    ? displayResults("GAME: You win!")
    : displayResults("GAME: You lose!");
  return;
}

const divOptions = document.querySelector("#options");

divOptions.childNodes.forEach((option) => {
  option.addEventListener("click", (e) => {
    playRound(e.target.textContent);
  });
});

const divRoundResults = document.querySelector("#round-results");

function displayResults(result) {
  const p = document.createElement("p");
  p.textContent = result;
  divRoundResults.insertBefore(p, divRoundResults.firstChild);
}
const pGameScore = document.querySelector("#game-score");

function updateGameResults() {
  pGameScore.textContent =
    "Human " + humanScore + " | Computer: " + computerScore;
}

function haveAWinner() {
  if (humanScore === 5) {
    alert("YOU WIN THE GAME!!!");
    humanScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    alert("YOU LOST THE GAME... computer wins e.e");
    humanScore = 0;
    computerScore = 0;
  }
}

updateGameResults();
