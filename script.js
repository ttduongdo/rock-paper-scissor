let playerScore = 0;
let computerScore = 0;

function getComputerChoice(listChoice) {
    return listChoice[Math.floor(Math.random()*listChoice.length)];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return("You Lose! Paper beats Rock.")
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return("You Lose! Scissors beat Paper.")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        return("You Lose! Rock beats Scissors.")
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return("You Win! Rock beats Scissors.")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return("You Win! Scissors beat Paper.")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return("You Win! Paper beats Rock.")
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        return("That's a draw!")
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        return("That's a draw!")
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return ("That's a draw!") 
    }
}


function game(){
    const listChoice = ["rock", "paper", "scissors"];
    let ans = true;
    while (ans) {
        
        const buttons = Array.from(document.querySelectorAll('button'));
        buttons.forEach(button => button.addEventListener('click', () => {
            if (playerScore < 5 && computerScore < 5) {
                let playerSelection = button.textContent;
                playerSelection = playerSelection.toLowerCase();
                console.log(playerSelection);
                let computerSelection = getComputerChoice(listChoice);
                document.querySelector('.result').textContent = playRound(playerSelection, computerSelection);
                document.querySelector('.score').textContent = `${playerScore} : ${computerScore}`;
            
            }
            if (playerScore == 5 || computerScore == 5) {
                buttons.forEach(button => button.disabled = true);
                if (playerScore > computerScore) {
                    document.querySelector('.result').textContent = "Game over. You win!";
                } else if (playerScore < computerScore) {
                    document.querySelector('.result').textContent = "Game over. You lose!";
                } else {
                    document.querySelector('.result').textContent = "Game over. It's a draw.";
                }
            }   
        }));

        
        ans = confirm("Another round?");
        
    } 
} 


game()
