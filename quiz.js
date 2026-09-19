// =====================================
// LOVE QUIZ 💗
// =====================================

console.log("QUIZ JS ACTIVE 🧠");


const quizData = [

{
question:"What is my favorite thing about you? 💗",
options:[
"Your smile",
"Your money",
"Your phone",
"Your food"
],
answer:0
},


{
question:"What do I want to do with you someday? 🌙",
options:[
"Travel together",
"Fight everyday",
"Ignore you",
"Forget you"
],
answer:0
},


{
question:"What nickname do I use for you? 🐱",
options:[
"Mai",
"Stranger",
"Enemy",
"Nobody"
],
answer:0
},


{
question:"What makes me happiest? ✨",
options:[
"Seeing you happy",
"Being alone",
"Sleeping forever",
"Winning games"
],
answer:0
},


{
question:"Do I love you? 💕",
options:[
"Maybe",
"No",
"Of course yes",
"I don't know"
],
answer:2
}

];





let currentQuiz = 0;
let quizScore = 0;




const quizStart =
document.getElementById("quizStart");



if(quizStart){

quizStart.onclick=()=>{

startQuiz();

};

}






function startQuiz(){


currentQuiz=0;
quizScore=0;


showQuestion();


}







function showQuestion(){


const box =
document.getElementById("quizBox");



let q =
quizData[currentQuiz];



box.innerHTML=`


<h3>
${q.question}
</h3>


<div class="quiz-options">


${q.options.map((option,index)=>{


return `

<button onclick="answerQuiz(${index})">

${option}

</button>

`;


}).join("")}



</div>


<p>

Question ${currentQuiz+1}/${quizData.length}

</p>


`;



}








function answerQuiz(selected){



let correct =
quizData[currentQuiz].answer;



if(selected===correct){

quizScore++;

}



currentQuiz++;



if(currentQuiz < quizData.length){


showQuestion();



}else{


finishQuiz();


}



}








function finishQuiz(){



const box =
document.getElementById("quizBox");



box.innerHTML=`


<h2>
Quiz Complete 💗
</h2>


<p>

You got ${quizScore}/${quizData.length}

</p>



<p>

Thank you for remembering our little memories ♡

</p>



<button onclick="changePage('games')">

Go To Mini Games 🎮

</button>


`;



}