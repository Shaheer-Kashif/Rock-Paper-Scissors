let choices = document.querySelectorAll(".button-img");
let playerCounter = document.querySelector("#player-number");
let AICounter = document.querySelector("#ai-number");

let messageBox = document.querySelector(".turn");

let AIScore = 0;
let userScore = 0;

let userChoice;
let gameOver;


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (!gameOver) {
            userChoice = choice.getAttribute("id");
            choice.classList.toggle("clicked");
            playGame(userChoice,choice);
        }
        
    });
});

const AIChoice = () => {
    let AIChoices = ["rock","paper","scissors"];
    return AIChoices[Math.floor(Math.random()*AIChoices.length)];
}
const playGame = (userChoice,choice) => {
    const CompChoice = AIChoice();
    let AI_button = document.querySelector(`#${CompChoice}`);

    let IndicatorText = `You chose ${userChoice} and the AI chose ${CompChoice}.`;
    if (userChoice === CompChoice) {
        messageBox.innerHTML = "It is a Tie! You and AI both chose "+userChoice+".";
        AI_button.classList.add("double-border");
        messageBox.style.backgroundColor = "#0048ff";
    }
    else if ((userChoice === "rock" && CompChoice === "scissors") || (userChoice === "paper" && CompChoice === "rock") || (userChoice === "scissors" && CompChoice === "paper")) {
        messageBox.innerHTML = "You Win! " + IndicatorText;
        AI_button.classList.add("AIclicked");
        messageBox.style.backgroundColor = "green";
        userScore += 1
    }
    else {
        messageBox.innerHTML = "You Lose! "  + IndicatorText;
        AI_button.classList.add("AIclicked");
        messageBox.style.backgroundColor = "red";
        AIScore += 1;
    }

    playerCounter.innerText = userScore;
    AICounter.innerText = AIScore;
    document.body.classList.add('freeze-page');

    setTimeout(() => {
        document.body.classList.remove('freeze-page');
        choice.classList.remove("clicked");
        AI_button.classList.remove("AIclicked");
        AI_button.classList.remove("double-border");
    }, 2000)
    


}