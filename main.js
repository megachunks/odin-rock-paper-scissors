let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3)) + 1;
    if (randomNumber === 1) return "rock"
    if (randomNumber === 2) return "paper"
    if (randomNumber === 3) return "scissors"
}

function getHumanChoice() {
    let choice = prompt("What's your choice human...?");
    return choice.toLowerCase();
}

function winRound() {
    console.log("You win!")
    humanScore++;
    return;
}
function loseRound() {
    console.log("You lose!")
    computerScore++;
    return;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    console.log("You picked " + humanChoice + " and the computer picked " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Tie! Haha...");
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
    return
}

function playGame() {
    for (let i=1; i <= 5; i++) {
        console.log("ROUND " + i)
        playRound();
        console.log("Current scores human vs computer: " + humanScore + " " + computerScore);
    }
    if (humanScore === computerScore) console.log("GAME: ITS A TIE");
    humanScore > computerScore ? console.log("GAME: You win!") : console.log("GAME: You lose!");
    return;
}