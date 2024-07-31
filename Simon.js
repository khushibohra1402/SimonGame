let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let highScore=0;
document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("game started")
        start=true;
        levelUp();
    }
})
function gameflash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp()
{
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    //random btn choose
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    //console.log(randIndx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}
function btnPress(){
    //iss function ke andar jo "this" hoga wo wahi button hoga jisko press kiya gaya tha
    console.log("btn was pressed");
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        if(level>highScore)
        {
            highScore=level;
            h3.innerText=`GAME OVER!! Your score is ${level} and HIGHSCORE=${level} \n Press any key to start`;
        }
        else
        {
            h3.innerText=`GAME OVER!! Your score is ${level} HIGHSCORE=${highScore}\n Press any key to start`;
        }
        document.querySelector("body").style.backgroundColor='red'; 
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }

}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}