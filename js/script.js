
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper or Scissors.");
    return choice
}
 console.log(getHumanChoice())

 function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); 

        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice;
        } else {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + humanChoice;
        }
    }

  
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
    }

   
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost.");
    } else {
        console.log("It's a tie!");
    }
}

playGame();

