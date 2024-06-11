let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorep = document.querySelector("#user");
const comScorep = document.querySelector("#computer");

const reset = document.querySelector("#re");


const GamComChoice = () => {
    let option = ["rock", "paper", "scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return option[ranidx];
};

const drawgame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game Draw, Play again !";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,comchoice, Userchoice) => {
    if(userWin){
        userScore++;
        userScorep.innerHTML = userScore;
        msg.innerText = `You Win! Your ${Userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        comScorep.innerHTML = comScore;
        msg.innerText = `You Lose! ${comchoice} beats Your ${Userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (Userchoice) => {
    // console.log("user choice = ", Userchoice);
    const comchoice = GamComChoice();
    // console.log("Computer choice = ", comchoice);

    if(Userchoice === comchoice) {
        drawgame();
    }else{
        let userWin = true;
        if(userWin === "rock") {
            // paper , scissors
            userWin = comchoice === "paper" ? false : true;
        }else if(userWin === "paper") {
            // rock , scissors
            userWin = comchoice === "scissors" ? false : true;
        }else{
            userWin = comchoice === "rock" ? false : true;
        }

        showWinner(userWin, comchoice, Userchoice);
    }

    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
    });
});

const Reset = () => {
    userScore = 0;
    comScore = 0;
};

re.addEventListener("click",() => {
    userScorep.innerHTML = 0;
    comScorep.innerText = 0;
    msg.innerText = `Play Your Move`;
    msg.style.backgroundColor = "black";
    Reset();
    
});


