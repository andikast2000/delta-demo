let gameSeq = [];
let userSeq= [];
let highest_Score =0;
let score = 0;
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started =true;
    }
    levelUp();
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.ceil(Math.random() * (3 - 0)) + 0 - 1;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    /*console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);*/
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function checkAns(idx) {
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
                
            
        }
    }else {
        score = level;
        if(score>highest_Score){
            highest_Score = score;
        }
        h2.innerHTML = `Game Over! Your score was <b>${score}</b> <br> Highest Score ${highest_Score} <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        })
        reset();
    }

}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
    score =0;
}