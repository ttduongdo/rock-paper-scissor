function getComputerChoice(listChoice) {
    return listChoice[Math.floor(Math.random()*listChoice.length)];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        return("You Lose! Paper beats Rock.")
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return("You Lose! Scissors beat Paper.")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return("You Lose! Rock beats Scissors.")
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return("You Win! Rock beats Scissors.")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return("You Win! Scissors beat Paper.")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
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
    while (true) {
        let computerSelection = getComputerChoice(listChoice);
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        if (playerSelection === null) {
            break
        }
        playerSelection = playerSelection.toLowerCase();
        if (!listChoice.includes(playerSelection)) {
            console.log("Enter a valid choice.")
            continue
        }
        console.log(playRound(playerSelection, computerSelection));
        let ans = confirm("Another round?");
        if (ans == false) {
            break
        }
    }  
}

game()
