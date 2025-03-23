let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-btn");
let sss=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetbtnbtn= () =>{
    turn0=true;
    enableboxes(); 
    sss.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("the box was clicked");
        if(turn0){
            box.innerText="X";
            turn0=false;
        } else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
});

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
 const  showWinner = (winner) =>{
    msg.innerText=`CONGO , winner is ${winner}`;
    sss.classList.remove("hide");
    disableboxes();
 };

const checkwinner= () =>{
  for(let pattern of winpatterns){
    let pos1Val= boxes [pattern[0]].innerText;
    let pos2Val= boxes [pattern[1]].innerText;
    let pos3Val= boxes [pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != ""  && pos3Val != ""
    ){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("THE WINNER IS " + pos1Val);
            showWinner(pos1Val);
        }
  }

}};

newgamebtn.addEventListener("click" , resetbtnbtn); 
resetbtn.addEventListener("click" , resetbtnbtn); 


