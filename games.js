// =====================================
// GAMES SYSTEM 🎮
// =====================================

console.log("GAMES JS ACTIVE 🎮");


// =====================================
// CATCH THE HEARTS ❤️
// =====================================


let heartScore = 0;
let gameTime = 20;
let heartTimer;
let heartSpawner;



const heartGameBtn =
document.getElementById("heartGameBtn");



if(heartGameBtn){

heartGameBtn.onclick=()=>{

changePage("games");

startHeartGame();

};

}




function startHeartGame(){


heartScore=0;
gameTime=20;



const card =
document.getElementById("heartGameCard");



card.innerHTML=`

<h3>
Catch The Hearts ❤️
</h3>


<p>
Score: <span id="heartScore">0</span>
</p>


<p>
Time: <span id="heartTime">20</span>s
</p>


<div id="heartArea"></div>


`;



heartSpawner =
setInterval(createHeart,700);



heartTimer =
setInterval(()=>{


gameTime--;


let time =
document.getElementById("heartTime");


if(time){

time.innerHTML=gameTime;

}



if(gameTime<=0){

finishHeartGame();

}



},1000);



}







function createHeart(){


const area =
document.getElementById("heartArea");


if(!area) return;



const heart =
document.createElement("div");



heart.className="falling-heart";


heart.innerHTML="♡";



heart.style.left =
Math.random()*85+"%";



heart.onclick=()=>{


heartScore++;


let score =
document.getElementById("heartScore");


if(score){

score.innerHTML=heartScore;

}



heart.remove();


};



area.appendChild(heart);



setTimeout(()=>{

heart.remove();

},3000);



}







function finishHeartGame(){


clearInterval(heartTimer);

clearInterval(heartSpawner);



const card =
document.getElementById("heartGameCard");



card.innerHTML=`

<h3>
Catch The Hearts Finished ❤️
</h3>


<p>
You caught ${heartScore} hearts!
</p>


<button id="continueMemory">

Continue To Adobo Memory 🐱

</button>


`;



document
.getElementById("continueMemory")
.onclick=()=>{


startMemoryGame();


};



}









// =====================================
// ADOBO MEMORY 🐱
// =====================================



const memoryGameBtn =
document.getElementById("memoryGameBtn");



if(memoryGameBtn){

memoryGameBtn.onclick=()=>{

startMemoryGame();

};

}





const adoboCards=[


"🐱",
"🐱",

"🐾",
"🐾",

"💗",
"💗",

"🎀",
"🎀",

"🌙",
"🌙",

"✨",
"✨"


];



let flipped=[];

let matched=[];






function startMemoryGame(){


changePage("games");



const card =
document.querySelectorAll(".game-card")[1];



card.innerHTML=`

<h3>
Adobo Memory 🐱
</h3>


<p>
Find all matching cards ♡
</p>


<div id="memoryBoard"></div>


`;



flipped=[];
matched=[];


createBoard();


}







function createBoard(){


const board =
document.getElementById("memoryBoard");



let shuffle =
[...adoboCards]
.sort(()=>Math.random()-0.5);



shuffle.forEach(symbol=>{


let card =
document.createElement("div");



card.className="memory-card";


card.dataset.symbol=symbol;


card.innerHTML="❔";



card.onclick=()=>{

flipCard(card);

};



board.appendChild(card);



});


}








function flipCard(card){


if(
flipped.length>=2 ||
card.classList.contains("open") ||
card.classList.contains("match")
){

return;

}



card.innerHTML =
card.dataset.symbol;


card.classList.add("open");


flipped.push(card);



if(flipped.length===2){

checkMatch();

}



}








function checkMatch(){


let first =
flipped[0];


let second =
flipped[1];



if(
first.dataset.symbol ===
second.dataset.symbol
){


first.classList.add("match");

second.classList.add("match");



matched.push(first,second);


flipped=[];



if(matched.length===adoboCards.length){


setTimeout(()=>{


showFinal();


},700);



}



}

else{


setTimeout(()=>{


first.innerHTML="❔";

second.innerHTML="❔";


first.classList.remove("open");

second.classList.remove("open");


flipped=[];


},800);


}



}









// =====================================
// FINAL 🎁
// =====================================


function showFinal(){


changePage("final");


}



const giftBtn =
document.getElementById("giftBtn");



if(giftBtn){


giftBtn.onclick=()=>{


document.getElementById("finalMessage").innerHTML=`

<h2>
Thank You For Being My Mai 💗
</h2>


<p>

This little world was made with love ♡

<br><br>

Happy Birthday 🎂✨

</p>


`;



};



}