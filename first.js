let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");

let count =0; //to track draw

let turn0 = true;
const winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetgame = () => {
    turn0 = true;
    count =0;
    enablebox();
};
const color0 = "#F2BB05";
const colorx = "whitesmoke";

// const winnerr = "red";
const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }

};
const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const gameDraw = () => {
    msg.innerText = "Game was a draw";
    msgcontainer.classList.remove("hide");
    disablebox();
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText = "O";
            box.style.color = color0;
            turn0 = false;
        }
        else{
            box.innerText= "X";
            box.style.color = colorx;
            turn0 = true;
        }
        box.disabled = true;
        count++;

        
       let IsWinner = CheckWinner();
       if(count === 9 && !IsWinner )
       {
        gameDraw();
       }
    });

});


const ShowWinner = (Winner) => {
    // Winner.style.color = "red";
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
const CheckWinner = () => {
    for(let pattern of winpatterns )
    {
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;
    
      
     if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3)
        {
            console.log("winner",pos1);
            ShowWinner(pos1);
            return true;
           
    }
    else{
        return false;
    }
}}};
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

