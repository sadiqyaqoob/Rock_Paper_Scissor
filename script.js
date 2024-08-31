let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#compter-score");
const getcompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you Win");
        msg.innerText = `YOU WIN !your ${userChoice} beat ${compChoice}`;

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You lose! computer ${compChoice} beat your ${userChoice}`;

    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = getcompChoice();
    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {
        msg.innerText = "Game is draw"
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});