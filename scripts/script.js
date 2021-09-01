choices = ['rock', 'paper', 'scissors']

function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock') {
        return (computerSelection === 'paper') ? 'L'
            :  (computerSelection === 'scissors') ? 'W'
            :  'D'; 
    }

    if (playerSelection === 'scissors') {
        return (computerSelection === 'rock') ? 'L'
            :  (computerSelection === 'paper') ? 'W'
            :  'D'; 
    }

    if (playerSelection === 'paper') {
        return (computerSelection === 'scissors') ? 'L'
            :  (computerSelection === 'rock') ? 'W'
            :  'D'; 
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        // let playerSelection = 'paper';
        message = 'Choose: ROCK / PAPER/ SCISSORS';
        let playerSelection = window.prompt(message);
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === 'W') {
            console.log(`Round ${i}: You WIN!`);
            playerScore++;
        }
        else if (result === 'L') {
            console.log(`Round ${i}: You LOSE!`);
            computerScore++;
        }
        else {
            console.log(`Round ${i}: DRAW!`)
        }
    }
    console.log(`Your wins: ${playerScore}`);
    console.log(`Computer wins: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('You WON the BO5!');
    }
    else if (playerScore < computerScore){
        console.log('Better luck next time. You LOST the BO5!')
    }
    else {
        console.log('Wow! You tied with the computer.')
    }
}

game();