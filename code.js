const getUserChoice = userInput => { userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('Error!')
    }
}

const hands = ["Rock", "Paper", "Scissors"]
const randomHands = hands[Math.floor(Math.random() * hands.length)];

const getComputerChoice = () => randomHands





