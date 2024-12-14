const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}


function updateUI(result) {
    const resultDiv = document.querySelector('.result');
    const scoreDiv = document.querySelector('.score');
    
    resultDiv.textContent = result;
    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}

rockButton.addEventListener('click', () => handleChoice('rock'));
paperButton.addEventListener('click', () => handleChoice('paper'));
scissorsButton.addEventListener('click', () => handleChoice('scissors'));

function handleChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateUI(result);
    
    
    if (humanScore === 5 || computerScore === 5) {
        const finalMessage = humanScore > computerScore
            ? "Congratulations! You won!"
            : "Sorry, you lost.";
        alert(finalMessage);
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateUI("Game reset. Make your move!");
}
