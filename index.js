let question = document.getElementById("question-el")
let continueBtn = document.getElementById("continue-btn")
let inputName = document.getElementById("input-name")
let nameEl = document.getElementById("name-el")

let positiveAnswer = document.getElementById("yes-btn")
let negativeAnswer = document.getElementById("no-btn")
let toPlayEl  = document.getElementById("to-play-el")
positiveAnswer.style.display = "none"
negativeAnswer.style.display = "none"


let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")
let generateBtn = document.getElementById("generate-btn")
let triesEl = document.getElementById("tries-el")
inputEl1.style.display = "none"
inputEl2.style.display = "none"
generateBtn.style.display = "none"
triesEl.style.display = "none"


let userInput = document.getElementById("user-input")
let inputBtn = document.getElementById("input-btn")
let counterEl = document.getElementById("counter-el")
userInput.style.display = "none"
inputBtn.style.display = "none"
counterEl.style.display = "none"

let randomEl = document.getElementById("random-el")
let endGame = document.getElementById("end-game")
randomEl.style.display = "none"
endGame.style.display = "none"

let playAgain = document.getElementById("play-again")
playAgain.style.display = "none"

let hasWon = false
let shouldFinish = false
let timesTried = 0
let triesLeft = 5

let a = 0
let b = 0
let numberToGuess = 0
let randomNumber = 0
let name = ""

continueBtn.addEventListener("click", function continueGame(){
    name = inputName.value
    nameEl.textContent = `Hallooo ${name}! 
Do you want to play a game?`
    
    positiveAnswer.style.display = "unset"
    negativeAnswer.style.display = "unset"
    continueBtn.style.display = "none"
    question.style.display = "none"
    inputName.style.display = "none"
})

positiveAnswer.addEventListener("click", function positive(){
    toPlayEl.textContent = `Ok, ${name}, lets play! 
Please, provide your range`
    
    inputEl1.style.display = "unset"
    inputEl2.style.display = "unset"
    generateBtn.style.display = "unset"
    positiveAnswer.style.display = "none" 
    negativeAnswer.style.display = "none"
    nameEl.style.display = "none"
})

negativeAnswer.addEventListener("click", function negative(){    
    toPlayEl.textContent = "Oki doki, see ya"
    
    nameEl.style.display = "none"
    positiveAnswer.style.display = "none"
    negativeAnswer.style.display = "none"
})

generateBtn.addEventListener("click", function enter() {
    a = inputEl1.valueAsNumber
    b = inputEl2.valueAsNumber
    let min = Math.ceil(a)
    let max = Math.floor(b)
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min    
    triesEl.style.display = "unset"
    triesEl.textContent = `You have 5 tries.
Guess the number between ${a} and ${b}`    
    
    userInput.style.display = "unset"
    inputBtn.style.display = "unset"
    randomEl.style.display = "unset"
    inputEl1.style.display = "none"
    inputEl2.style.display = "none"
    generateBtn.style.display = "none"
    toPlayEl.style.display = "none"
    counterEl.style.display = "unset"
    counterEl.textContent = "Tries left: " + triesLeft
})

inputBtn.addEventListener("click", function input() {
    
    numberToGuess = userInput.valueAsNumber
    userInput.value = ""
    triesEl.style.display = "unset"
    randomEl.style.display = "unset" 
    timesTried += 1
    triesLeft -= 1
    counterEl.textContent = "Tries left: " + triesLeft
        if (timesTried < 5) {
            if (numberToGuess === randomNumber) {
                hasWon = true
                shouldFinish = true
                endGame.style.display = "unset"
                playAgain.style.display = "unset"
                endGame.textContent = "YOU WON"
                
                randomEl.style.display = "none"
                inputBtn.style.display = "none"
                userInput.style.display = "none"
                triesEl.style.display = "none"
                generateBtn.style.display = "none"
                inputEl1.style.display = "none"
                inputEl2.style.display = "none"
                toPlayEl.style.display = "none"
                counterEl.style.display = "none"
            } else if (numberToGuess > randomNumber) {
                randomEl.textContent = "Guess lower"
            } else {
                randomEl.textContent = "Guess higher"
            }
        } else {
            shouldFinish = true
            endGame.style.display = "unset"
            playAgain.style.display = "unset"
            endGame.textContent = `YOU LOST
You used all 5 tries`
            
            randomEl.style.display = "none"
            inputBtn.style.display = "none"
            userInput.style.display = "none"
            triesEl.style.display = "none"
            generateBtn.style.display = "none"
            inputEl1.style.display = "none"
            inputEl2.style.display = "none"
            toPlayEl.style.display = "none"
            counterEl.style.display = "none"            
            }
})

playAgain.addEventListener("click", function playAgain() {
    inputEl1.value = ""
    inputEl2.value = ""
    triesEl.textContent = ""
    toPlayEl.textContent = `Ok, ${name}, lets play again! 
Please, provide new range`
        
    hasWon = false
    shouldFinish = false
    timesTried = 0
    triesLeft = 5

    a = 0
    b = 0
    numberToGuess = 0
    randomNumber = 0
    
    inputEl1.style.display = "unset"
    inputEl2.style.display = "unset"
    generateBtn.style.display = "unset"
    randomEl.style.display = "none"  
    toPlayEl.style.display = "unset"    
    endGame.style.display = "none"     
})

