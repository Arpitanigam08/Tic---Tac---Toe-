let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGamebutton = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#message");
let turnO = true;
let count = 0;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#3b82f6";
            turnO = false;

        }
        else {
            box.innerText = "X";
            box.style.color = "#f5590b";
            turnO = true;

        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gamedraw();
        }
    });
});
const gamedraw = () => {
    msg.innerText = `This Game Is Draw Now `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations !!!! Winner  is ${winner}..`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; 
    }
};
const checkWinner = () => {
    for (let pattern of win) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                showWinner(p1);
                return true;
            }
        }

    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const resetFunction = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};
newGamebutton.addEventListener("click", resetFunction);
resetButton.addEventListener("click", resetFunction);