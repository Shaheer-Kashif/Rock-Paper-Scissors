let choices = document.querySelectorAll(".button-img");
let userChoice;
let gameOver;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (!gameOver) {
            userChoice = choice.getAttribute("id");
            choice.classList.toggle("clicked");
            playGame(userChoice);
        }
        
    });
});

const AIChoice = () => {
    let AIChoices = ["rock","paper","scissors"];
    return AIChoices[Math.floor(Math.random()*AIChoices.length)];
}
const playGame = (userChoice) => {
    const CompChoice = AIChoice();
    let AI_button = document.querySelector(`#${CompChoice}`);
    AI_button.classList.toggle("AIclicked");
    gameOver = true;
    let IndicatorText = `You chose ${userChoice} and the AI chose ${CompChoice}`;
    if (userChoice === CompChoice) {
        document.querySelector(".turn").innerHTML = "It is a Tie!"  + IndicatorText;
    }
    else if (userChoice === "rock" && CompChoice === "scissors") {
        document.querySelector(".turn").innerHTML = "You Win!" + IndicatorText;
    }
    else if (userChoice === "paper" && CompChoice === "rock") {
        document.querySelector(".turn").innerHTML = "You Win!"  + IndicatorText;
    }
    else if (userChoice === "scissors" && CompChoice === "paper") {
        document.querySelector(".turn").innerHTML = "You Win!"  + IndicatorText;
    }
    else {
        document.querySelector(".turn").innerHTML = "You Lose!"  + IndicatorText;;    
    }

}