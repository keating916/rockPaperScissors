let playerScore = 0
let computerScore = 0 //initialize player and computer scores
let computerSelection = () => {
    let sel = Math.random() *3
    sel = Math.ceil(sel);
    if(sel== 1) {
        return "rock";
    }else if (sel == 2) {
        return "paper";
    }else{
        return "scissors"
    };
};
console.log("Great Job");
let playButton = document.getElementById("play");
playButton.addEventListener("click", e => {
    let message = document.getElementById("displayMessage");
    function playerSelection() {
        if(document.getElementById("rock").checked) {
            return "rock"
        }else if(document.getElementById("paper").checked) {
            return "paper"
        }else if(document.getElementById("scissors").checked) {
            return "scissors"
        }
    }
    if(playerSelection()=="rock") {
        if(computerSelection() == "paper") {
            computerScore++
            message.textContent= "You lose! Paper Beats Rock"
        }else if(computerSelection() == "scissors") {
            playerScore++
            message.textContent= "You Win! Rock Beats Scissors"
        }else{
            message.textContent= "You both Picked Rock"
        }
    }
    if(playerSelection()=="paper") {
        if(computerSelection() == "rock") {
            playerScore++
            message.textContent= "You Win! Paper Beats Rock"
        }else if(computerSelection() == "scissors") {
            computerScore++
            message.textContent= "You lose! Scissors Beats Paper"
        }else{
            message.textContent= "You both Picked Paper"
        }
    }
    if(playerSelection()=="scissors") {
        if(computerSelection() == "rock") {
            computerScore++
            message.textContent= "You lose! Rock Beats Scissors"
        }else if(computerSelection() == "paper") {
            playerScore++
            message.textContent= "You Win! Scissors Beats Paper"
        }else{
            message.textContent= "You both Picked Scissors"
        }
    }
    let score = document.getElementById("score")
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`
});
let score = document.getElementById("score")
score.textContent = `You: ${playerScore} Computer: ${computerScore}`

