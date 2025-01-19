
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

function getHumanChoice() {

    let input = ""

    // Could modify this to tell the user if the input is wrong
    while ((options.indexOf(input.toLowerCase()) === -1)) {
        input = prompt("Make your choice : ", "")
    }

    return input
}

function playRound(humanChoice, computerChoice) {

    console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log('No score draw')
    }
    else if (winningMoves[humanChoice] === computerChoice) {
        humanScore = humanScore + 1
    }
    else {
        computerScore = computerScore + 1
    }
}

function playGame(rounds) {

    for (game = 0; game < 5; game++) {

        console.log(`Playing game ${game + 1}`)
        playRound(getHumanChoice(), getComputerChoice())

        console.log(`Human : ${humanScore}, Computer : ${computerScore}`)
    }

    if (humanScore === computerScore) {
        console.log("It's a draw")
    }
    else if (humanScore > computerScore) {
        console.log("Human wins")
    }
    else {
        console.log("Computer wins")
    }
}

// Could improve this to ask how many rounds to play
playGame(5)
