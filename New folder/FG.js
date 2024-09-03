let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-b");
let newgamebtn =document.querySelector(".newB"); 
let msgconti= document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];





const resetgame =() =>{
    turnO = true;
    enablesboxes();
    msgconti.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if(turnO){
        box.innerText ="0";
        turnO = false;
        box.style.backgroundColor="#A0937D"
        }else {
            box.innerText = "X";
            turnO = true;
             box.style.backgroundColor="#E7D4B5"
        }
        box.disabled = true;
        cheakwinner();
    })
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};
const enablesboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};
const showWinner = (winner) => {
    msg.innerText =`Congratutalion, winner is ${winner}` ;
    msgconti.classList.remove("hide");
    disabledboxes();
};
const cheakwinner=()=>{
    for(let pattern of winpatterns){
       
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            if(pos1val !=""&& pos2val != ""&& pos3val !=""){
                if(pos1val === pos2val &&pos2val ===pos3val){
                    console.log("WINNER",pos1val);
                    showWinner(pos1val);
                }
            }
    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);