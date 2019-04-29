const playerScore = 0
const computerScore = 0 //initialize player and computer scores
let computerSelection = () => {
    let sel = Math.random() *3
    sel = Math.ceil(sel);
    return sel;
};
