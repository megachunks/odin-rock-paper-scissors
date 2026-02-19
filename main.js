let humanScore = 0;
let computerScore = 0;

console.log("Howdy! Let's play...");
playRound()

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("Your choices human and computer:" + humanChoice + ', ' + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Tie! Haha... you both pick " + computerChoice);
        return;
    }
    if (computerChoice === "rock") {
        humanChoice === "paper" ? console.log("You win! Paper beats Rock") : console.log("You lose! Rock beats paper Scissors");
        return;
    }
    if (computerChoice === "paper") {
        humanChoice === "scissors" ? console.log("You win! Scissors beats Paper") : console.log("You lose! Paper beats) Rock");
        return;
    }
    if (computerChoice === "scissors") {
        humanChoice === "rock" ? console.log("You win! Rock beats Scissors") :console.log( "You lose! Scissors beats Paper");
        return;
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice human...?");
    return choice.toLowerCase();
}

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3)) + 1;
    if (randomNumber === 1) return "rock"
    if (randomNumber === 2) return "paper"
    if (randomNumber === 3) return "scissors"
}