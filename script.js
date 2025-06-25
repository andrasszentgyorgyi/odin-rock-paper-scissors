//take input from user (rock, paper, or scissors)
//randomly generate number from 1-3 to represent computer's choice
//decide who won and print it

//0


function getComputerChoice(){ //returns 0, 1, or 2. (represents RPS)
    let x = Math.floor(Math.random()*3);
    if (x==0){
        return "ROCK";
    } else if (x==1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice(){
    let input = prompt("Please enter rock, paper, or scissors!")
    let capitalized = input.toUpperCase();
    return capitalized;
}

function playGame(){
    //score variables
    let userScore = 0;
    let computerScore = 0;

    //5 rounds
    for(let i = 0; i<5; i++){
        console.log(`Round ${i}:`);
        playRound();
        console.log(`Score\nUser: ${userScore}\nComputer: ${computerScore}\n`);
    }
    if(userScore == computerScore){
        while(userScore == computerScore){
            console.log("We are at a draw! TIEBREAKER!");
            playRound();
        }
    }else if(userScore>computerScore) {
        console.log("User wins the game!");
    }else{
        console.log("Computer wins the game!");
    }

    function playRound(){
    let userChoice = getHumanChoice();
    console.log("The user chose " + userChoice.toLowerCase() + "!");
    let computerChoice = getComputerChoice();
    console.log("The computer chose " + computerChoice.toLowerCase() + "!");
    if (userChoice == "ROCK"){
        switch(computerChoice){
            case "ROCK":
                console.log("Draw! Both players picked rock.");
                break;
            case "PAPER":
                console.log("Computer wins!");
                computerScore++;
                break;
            case "SCISSORS":
                console.log("User wins!");
                userScore++;
                break;
            default:
        }

    } else if (userChoice == "PAPER"){
        switch(computerChoice){
            case "ROCK":
                console.log("User wins!")
                userScore++;
                break;
            case "PAPER":
                console.log("Draw! Both players picked paper.");
                break;
            case "SCISSORS":
                console.log("Computer wins!");
                computerScore++;
                break;
            default:
        }

    } else {
        switch(computerChoice){
            case "ROCK":
                console.log("Computer wins!")
                computerScore++;
                break;
            case "PAPER":
                console.log("User wins!")
                userScore++;
                break;
            case "SCISSORS":
                console.log("Draw! Both players picked scissors.");
                break;
            default:
        }
    }
    }
}