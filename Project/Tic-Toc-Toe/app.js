let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let turn = true;

const winpattern = [
    [0,1,2],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
];

const resetGame = () => {
    turn = true;
    ebleboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("click the button");
        if(turn) {
            box.innerText = "O";
            turn = false;
            box.style.color = " red";
            
        }else{
            box.innerText = "X";
            turn = true;
            box.style.color = "black";
        }
        box.disabled = true;
        checkWinner();
    });
});


const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const ebleboxes =() => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, ${Winner} You Are the Winner`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattarn of winpattern) {
        let pos1val = boxes[pattarn[0]].innerText;
        let pos2val = boxes[pattarn[1]].innerText;
        let pos3val = boxes[pattarn[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
