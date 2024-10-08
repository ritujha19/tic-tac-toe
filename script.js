let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let body = document.querySelector("body");
let winner = document.querySelector("#winner");
let msg = document.querySelector("msg");
let turnO = true; //payerX,playerO
let congrats = document.querySelector("#congrats");
let gameActive = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(!gameActive) return;

        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
       
        checkWinner();
        box.disabled = true;
    });
    
});


const checkWinner = () =>{
    for(let pattern of winPattern){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;

     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            body.style.backgroundColor = "#f0d9da";
            winner.append(  pos1Val );
            winner.innerText = `WINNER = Player ${pos1Val}`;
            congrats.innerHTML= `<h2>Congratulation ! Player ${pos1Val} , you won!</h2>`;
            gameActive = false;
        }
     }
    }
}
resetBtn.addEventListener("click", ()=>{
    location.reload();
})