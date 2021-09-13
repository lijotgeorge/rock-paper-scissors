choices = ['bear', 'hunter', 'ninja']

// function that randomly selects the computer's choice
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// play a round of Rock-Paper-Scissors with result as 'W' (win), 'L' (loss) or 'D' (draw)
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'bear') {
        return (computerSelection === 'hunter') ? 'L'
            :  (computerSelection === 'ninja') ? 'W'
            :  'D'; 
    }

    if (playerSelection === 'hunter') {
        return (computerSelection === 'ninja') ? 'L'
            :  (computerSelection === 'bear') ? 'W'
            :  'D'; 
    }

    if (playerSelection === 'ninja') {
        return (computerSelection === 'bear') ? 'L'
            :  (computerSelection === 'hunter') ? 'W'
            :  'D'; 
    }
}

// function to play 5 rounds of RPS and declare the winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        // let playerSelection = 'paper';
        message = 'Choose: ROCK / PAPER/ SCISSORS';
        // let playerSelection = window.prompt(message);
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

// run the game
// game();

const playerChoice = document.querySelectorAll('.player-buttons');
let playerSelection;
let count = 1;
let playerScore = 0;
let computerScore = 0;


// we use the .forEach method to iterate through each button
playerChoice.forEach( (button) => {

    // and for each one we add a 'click' listener
    // button.addEventListener('click', () => {
    button.addEventListener('click', function playRounds () {
    
    // Change the round number on each button click
    roundDisplay = document.getElementById('round-info');
    roundDisplay.innerText = `ROUND ${count}`;

    // Get the selection from player and AI and decide winner
    playerSelection = button.id.slice(0, -7);
    let computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection, result);

    roundResult = document.getElementById('round-result');
    results = document.getElementById('results');
    // aiWins = document.getElementById('ai-wins');
    if (result === 'W') {
        console.log(`Round ${count}: You WIN!`);
        roundResult.innerText = 'You WIN!';
        results.innerHTML += '<i class="material-icons" style="font-size: 30px; color: green">check_circle</i>';
        playerScore++;
    }
    else if (result === 'L') {
        console.log(`Round ${count}: You LOSE!`);
        roundResult.innerText = 'You LOSE!';
        results.innerHTML += '<i class="material-icons" style="font-size: 30px; color: red">check_circle</i>';
        computerScore++;
    }
    else {
        console.log(`Round ${count}: DRAW!`)
        roundResult.innerText = 'DRAW!';
    }

    // Change the icon in the player selection window on selection
    psw = document.getElementById('player-selection-window');
    psw.children[0].src = button.children[0].src;

    // Change the icon in the AI selection window on selection
    aisw = document.getElementById('ai-selection-window');
    aiChoiceidx = choices.indexOf(computerSelection);
    aiButtons = document.getElementsByClassName('ai-buttons');
    aisw.children[0].src = aiButtons[aiChoiceidx].children[0].src ;

    count++;

    // if (playerScore == 5) {
    //     if (confirm('Congratlations! You Won! Play Again?')) {
    //         window.location.reload(true);
    //     } else {
    //         // window.close();
    //         window.location.reload(false);
    //     }
    // }
    
    // if (computerScore == 5) {
    //     if (confirm('Unlucky! You Lost! Play Again?')) {
    //         window.location.reload(true);
    //     } else {
    //         // window.close();
    //         window.location.reload(false);
    //     }
    // }
    if (playerScore == 5 || computerScore == 5) {
        playerChoice.forEach( (button) => {
            button.removeEventListener('click', playRounds);
        });
    } 
    });

});  
  
