capitalize = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
}

getComputerChoice = () => {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "Rock";
    } else if (computerSelection === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

getHumanChoice = () => {
    let humanSelection = capitalize(prompt("Make your decision:\nRock\nPaper\nScissors"));
    if (!["Rock", "Paper", "Scissors"].includes(humanSelection)) {
        alert("Wrong input..");
        getHumanChoice()
    }
    return humanSelection;
}

playRound = (human, computer) => {
    if (human === computer) {
        return
    } else if ((human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")) {
        console.log(`You win this round! ${human} beats ${computer}.`);
        return "player"
    } else if ((human === "Paper" && computer === "Scissors") ||
        (human === "Scissors" && computer === "Rock") ||
        (human === "Rock" && computer === "Paper")) {
        console.log(`You lose this round! ${computer} beats ${human}.`);
        return "computer"
    }
}

playGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if (roundWinner === "computer") {
            computerScore++;
        } else if (roundWinner === "player") {
            playerScore++;
        }
    }
    if (playerScore === computerScore) {
        console.log(`It's a tie with ${playerScore} points each.`)
    } else if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}`)
    } else {
        console.log(`Computer wins ${computerScore} to ${playerScore}`)
    }
}

playGame();