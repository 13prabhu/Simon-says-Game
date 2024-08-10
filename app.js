let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","green","purple"];
document.addEventListener("keypress" ,function(){
   if(started==false){
    console.log("game started");
    started=true;
    levelUp();
}
});

function levelUp(){
  userseq=[];
  level++;
  h2.innerText=`level ${level}`;
  let randidx=Math.floor(Math.random()*3);
  let randColor=btns[randidx];
  let randbtn=document.querySelector(`.${randColor}`);
//   console.log(randidx);
//   console.log(randColor);
//   console.log(randbtn);

  gameseq.push(randColor);
  console.log(gameseq);
  gameFlash(randbtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
    btn.classList.remove("userFlash");
    },250);
}
function checkAns(idx){
    // console.log("curr level : ",level);
    //  
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000)
       }

    }
    else{
        h2.innerHTML=`Game Over ! Your score was <b>${level} </br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){

            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnPress(){
    // console.log(this);
   let btn=this;
   userFlash(btn);
   userColor=btn.getAttribute("id");
   console.log(userColor);
   userseq.push(userColor);
   checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];

}

