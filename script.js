let buttons = document.querySelector("#buttons");
let results = document.querySelector("#results");
let userChoiceElement = document.querySelector("#userChoice");
let computerChoiceElement = document.querySelector("#computerChoice");

buttons.addEventListener("click", (event)=>{
    let target = event.target;
    switch(target.id){
        case "btnRock":
            playRound("ROCK");
            break;
        case "btnPaper":
            playRound("PAPER");
            break;
        case "btnScissors":
            playRound("SCISSORS");
            break;
    }
});

let textOutputElement = document.createElement("h1");
results.appendChild(textOutputElement);
let userChoiceOutputElement = document.createElement("h2");
let computerChoiceOutputElement = document.createElement("h2");
userChoiceElement.appendChild(userChoiceOutputElement);
computerChoiceElement.appendChild(computerChoiceOutputElement);

let userScoreElement = document.querySelector("#userScore");
let computerScoreElement = document.querySelector("#computerScore");


let userScore = 0;
let computerScore = 0;

function getComputerChoice() { //returns 0, 1, or 2. (represents RPS)
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "ROCK";
    } else if (x == 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let input = prompt("Please enter rock, paper, or scissors!")
    let capitalized = input.toUpperCase();
    return capitalized;
}

function playRound(playerSelection) {
    textOutputElement.textContent = "";
    userChoiceOutputElement.textContent = "";
    computerChoiceOutputElement.textContent = "";
    userChoiceOutputElement.textContent += "The user chose " + playerSelection.toLowerCase() + "!\r\n";
    let computerChoice = getComputerChoice();
    computerChoiceOutputElement.textContent += "The computer chose " + computerChoice.toLowerCase() + "!\r\n";
    if (playerSelection == "ROCK") {
        switch (computerChoice) {
            case "ROCK":
                textOutputElement.textContent += "Draw! Both players picked rock.\n";
                break;
            case "PAPER":
                textOutputElement.textContent +="Computer wins.\n";
                computerScore++;
                break;
            case "SCISSORS":
                textOutputElement.textContent += "User wins.\n";
                userScore++;
                break;
            default:
        }

    } else if (playerSelection == "PAPER") {
        switch (computerChoice) {
            case "ROCK":
                textOutputElement.textContent +="User wins.\n";
                userScore++;
                break;
            case "PAPER":
                textOutputElement.textContent +="Draw! Both players picked paper.\n";
                break;
            case "SCISSORS":
                textOutputElement.textContent +="Computer wins.\n";
                computerScore++;
                break;
            default:
        }

    } else {
        switch (computerChoice) {
            case "ROCK":
                textOutputElement.textContent +="Computer wins.\r\n";
                computerScore++;
                break;
            case "PAPER":
                textOutputElement.textContent +="User wins.\r\n";
                userScore++;
                break;
            case "SCISSORS":
                textOutputElement.textContent +="Draw! Both players picked scissors.\r\n";
                break;
            default:
        }
    }
    updateScoreboard();
}

function updateScoreboard(){
    userScoreElement.textContent = `User: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    checkForWin();
}

function checkForWin(){
    if (userScore == 5){
        alert("Game over! User wins!");
        userScore = 0;
        computerScore = 0;
        updateScoreboard();
    } else if (computerScore == 5){
        alert("Game over! Computer wins!");
        userScore = 0;
        computerScore = 0;
        updateScoreboard();
    } else {

    }
}

function playGame() {
    //score variables
    let userScore = 0;
    let computerScore = 0;

    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i}:`);
        playRound();
        console.log(`Score\nUser: ${userScore}\nComputer: ${computerScore}\n`);
    }
    if (userScore == computerScore) { //tiebreaker for when score is equal after 5 rounds.
        while (userScore == computerScore) {
            console.log("We are at a draw! TIEBREAKER!");
            playRound();
        }
    } else if (userScore > computerScore) {
        console.log("User wins the game!");
    } else {
        console.log("Computer wins the game!");
    }

}