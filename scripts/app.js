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

const playerChoice = document.querySelectorAll('.player-buttons');
let playerSelection;
const handlers = [];
let count = 1;
let playerScore = 0;
let computerScore = 0;

playerChoice.forEach( button => {

	handlers[button.id] = () => playRounds(button);
	button.addEventListener('click', handlers[button.id]);

	function playRounds(button) {
		// Change the round number on each button click
		roundDisplay = document.getElementById('round-info');
		roundDisplay.innerText = `ROUND ${count}`;
	
		// Get the selection from player and AI, decide winner and add marks in the respective columns
		playerSelection = button.id.slice(0, -7);
		let computerSelection = computerPlay();
		result = playRound(playerSelection, computerSelection);
		roundResult = document.getElementById('round-result');
   		results = document.getElementById('results');
		if (result === 'W') {
			roundResult.innerText = 'You WIN!';
			results.innerHTML += '<i class="material-icons" style="font-size: 30px; color: green">check_circle</i>';
			playerScore++;
		}
		else if (result === 'L') {
			roundResult.innerText = 'You LOSE!';
			results.innerHTML += '<i class="material-icons" style="font-size: 30px; color: red">check_circle</i>';
			computerScore++;
		}
		else {
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

		if (playerScore == 5 || computerScore == 5) {
			playerChoice.forEach( (button) => {
				button.removeEventListener('click', handlers[button.id]);
				button.onmouseover = () => {
					button.style.cursor = 'default';
					button.style.transform = 'scale(1)';
				}
			});

			centralColumn = document.getElementById('versus');
			centralColumn.style.border = '3px solid black';
			centralColumn.style.borderRadius = '20px';
			centralColumn.style.backgroundColor = '#c0d6df';
			centralColumn.style.fontFamily = '"Kaushan Script", cursive';
			centralColumn.style.fontWeight = 'bold';
			centralColumn.style.fontSize = '25px';
			// centralColumn.style.textTransform = 

			if (playerScore === 5) {
				centralColumn.innerText = 'CONGRATULATIONS!\nYOU HAVE DEFEATED THE COMPUTER!\n\nReset to beat it again and feel superior.';
			}
			if (computerScore === 5) {
				centralColumn.innerText = 'UNLUCKY!\nYOU HAVE LOST TO THE COMPUTER!\n\nReset to play again and show it who\'s boss!';
			}
		}
	}
})

resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', reload);
function reload() {
	window.location.reload(true);
}