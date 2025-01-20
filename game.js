
// options the computer can choose from
const options = ['rock', 'paper', 'scissors']

// winning move matrix
const winningMoves = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

// scores on the doors
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return options[Math.round(Math.random() * 2)]
}


function playRound(humanChoice, computerChoice) {

    document.querySelector("#message").textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}`


    if( humanChoice === computerChoice ) {
        document.querySelector("#message").textContent = document.querySelector("#message").textContent + ', no score draw'
    }
    else if (winningMoves[humanChoice] === computerChoice) {
        humanScore = humanScore + 1
        document.querySelector("#message").textContent = document.querySelector("#message").textContent + ', human scores'
    }
    else {
        
        computerScore = computerScore + 1
        document.querySelector("#message").textContent = document.querySelector("#message").textContent + ', computer scores'
    }

    document.querySelector("#human").textContent = humanScore
    document.querySelector("#computer").textContent = computerScore

    if (computerScore == 5) {
        document.querySelector("#message").textContent = 'Computer wins.'
    }
    if (humanScore == 5) {
        document.querySelector("#message").textContent = 'Human wins.'
    }
}

function playGame(rounds) {

    for (game = 0; game < 5; game++) {

        console.log(`Playing game ${game + 1}`)
        playRound(getHumanChoice(), getComputerChoice())

        console.log(`Human : ${humanScore}, Computer : ${computerScore}`)
    }


}


document.addEventListener('click', (event) => {

    switch (event.target.id) {

        case 'rock':

        case 'paper':

        case 'scissors':
            playRound(event.target.id, getComputerChoice())
            break;

        default:
        // ignore the event

    }


})
