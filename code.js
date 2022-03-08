//User input 

const getUserChoice = userInput => { userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else if (userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error!')
    }
    
}
//random generated hands 
const hands = ["Rock", "Paper", "Scissors"]
const randomHands = hands[Math.floor(Math.random() * hands.length)].toLowerCase();

const getComputerChoice = () => randomHands


//Determine a winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is a tie!"
    } 
    if (userChoice === 'bomb') {
        return "You activated secret Cheat Code = Winner!!!"
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!'
        } else {
            return 'You Won!'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!'
        } else {
            return 'You won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!'
        } else {
            return 'You won!'
        }
    }
}


//Play game
const playGame = () => {
    let userChoice = getUserChoice('bomb')
    let computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
