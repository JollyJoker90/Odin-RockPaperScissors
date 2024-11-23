const gameWindow = document.querySelector(".gameWindow");
const btns = document.querySelectorAll(".playBtn");
const textField = document.querySelector(".subtext");
const playerScoreValue = document.querySelector(".playerScoreValue");
const computerScoreValue = document.querySelector(".computerScoreValue");
const gameEndScreen = document.querySelector(".gameEndScreen");
const gameEndScreenText = document.querySelector(".gameEndScreenText");
const replayBtn = document.querySelector(".replay");
let playerScore = 0;
let computerScore = 0;

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
    let roundWinner = "";
    if (human === computer) {
        roundWinner = "";
    } else if ((human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")) {
        roundWinner = "player";
    } else if ((human === "Paper" && computer === "Scissors") ||
        (human === "Scissors" && computer === "Rock") ||
        (human === "Rock" && computer === "Paper")) {
        roundWinner = "computer";
    }
    handleRoundResult(roundWinner, human, computer);
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let playerSelection = btn.value;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})

const handleRoundResult = (roundResult, human, computer) => {
    let winConditionRounds = 5
    if (roundResult === "") {
        textField.textContent = "It's a tie.\nPlay next round.."
    } else if (roundResult === "player") {
        textField.textContent = `You win this round! ${human} beats ${computer}.`;
        playerScore++;
        playerScoreValue.textContent = playerScore.toString();
    } else if (roundResult === "computer") {
        textField.textContent = `You lose this round! ${computer} beats ${human}.`;
        computerScore++;
        computerScoreValue.textContent = computerScore.toString();
    }
    if (playerScore >= winConditionRounds || computerScore >= winConditionRounds) {
        // End game
        gameWindow.style.display = "none";
        gameEndScreen.style.display = "flex";
        if (playerScore >= winConditionRounds) {
            gameEndScreenText.textContent = "You won!!!"
        } else {
            gameEndScreenText.textContent = "You loose. Try again?"
        }
    }
}

replayBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreValue.textContent = playerScore.toString();
    computerScoreValue.textContent = computerScore.toString();
    gameWindow.style.display = "flex";
    gameEndScreen.style.display = "none";
})
// playGame = () => {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let roundWinner = playRound(getHumanChoice(), getComputerChoice());
//         if (roundWinner === "computer") {
//             computerScore++;
//         } else if (roundWinner === "player") {
//             playerScore++;
//         }
//     }
//     if (playerScore === computerScore) {
//         console.log(`It's a tie with ${playerScore} points each.`)
//     } else if (playerScore > computerScore) {
//         console.log(`Player wins ${playerScore} to ${computerScore}`)
//     } else {
//         console.log(`Computer wins ${computerScore} to ${playerScore}`)
//     }
// }

// playGame();