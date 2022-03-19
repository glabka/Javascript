const chomputerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

console.log('something')
console.log(possibleChoices)

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)
  console.log(randomNumber)
  computerChoice = possibleChoices[randomNumber].innerHTML
  console.log(computerChoice)
  chomputerChoiceDisplay.innerHTML = computerChoice
  getResult()
}

function getResult() {
  userWinsStr = 'User wins'
  computerWinsStr = 'Computer wins'
  if (computerChoice === userChoice) {
    result = 'it\'s a draw'
  } else if (computerChoice === 'rock') {
    if(userChoice === 'scissors') {
      result = computerWinsStr
    } else {
      // userChoice === paper
      result = userWinsStr
    }
  } else if (computerChoice === 'paper') {
    if(userChoice === 'scissors') {
      result = userWinsStr
    } else {
      // userChoice === rock
      result = computerWinsStr
    }
  } else {
    // computerChoice === scissors
    if (userChoice === 'paper') {
      result = computerWinsStr
    } else {
      // userChoice === Rock
      result = userWinsStr
    }
  }
  resultDisplay.innerHTML = result
}
