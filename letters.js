// =====================================
// LOVE LETTER SYSTEM 💌
// =====================================

console.log("LETTERS JS ACTIVE 💌");


// LETTER DATA

const letterData = {


miss:{
title:"🌙 Open When You Miss Me",
theme:"night",
sound:"missSound",

message:`

Hi love ♡


If you're reading this,
maybe you miss me a little.


No matter how far we are,
you are always close to my heart.


Someone is always cheering for you ♡

`
},



tired:{
title:"☁️ Open When You're Tired",
theme:"cloud",
sound:"tiredSound",

message:`

Hey love ♡


Please remember to rest.


You don't have to be strong
all the time.


Take a break,
drink water,
and be kind to yourself.


I'm always proud of you ♡

`
},




birthday:{
title:"🎂 Birthday Letter",
theme:"party",
sound:"birthdaySound",

message:`

Happy Birthday, my Mai! 🎉


Thank you for being
someone special in my life.


I hope this year brings you
happiness and beautiful memories.


Happy Birthday ♡

`
},




smile:{
title:"🌷 Open When You Need A Smile",
theme:"garden",
sound:"smileSound",

message:`

Hi sweetheart ♡


You are loved.

You are special.

You are appreciated.


Please smile today 🌷

`
},




love:{
title:"💗 Why I Love You",
theme:"romantic",
sound:"loveSound",

message:`

There are many reasons
why I love you.


I love your smile.

I love our conversations.

I love how you make
ordinary days special.


Thank you for being you ♡

`
},





secret:{
title:"✨ Secret Letter",
theme:"magic",
sound:"secretSound",

message:`

You found my secret letter ✨


This website was made with love.


Every animation,
every sound,
every little detail...


is a reminder that
you are special ♡

`
}


};





// ELEMENTS

const envelopes =
document.querySelectorAll(".envelope");


const popup =
document.getElementById("letterPopup");


const content =
document.getElementById("letterContent");


const closeBtn =
document.getElementById("closeLetter");


let currentSound=null;




// OPEN LETTER

envelopes.forEach(envelope=>{


envelope.onclick=()=>{


const type =
envelope.dataset.letter;


const letter =
letterData[type];



if(!letter) return;




content.innerHTML=`

<div class="theme-icon">

${getThemeIcon(letter.theme)}

</div>


<h2>
${letter.title}
</h2>


<p>
${letter.message.replace(/\n/g,"<br>")}
</p>

`;



popup.className =
"letter-popup " + letter.theme;



popup.style.display="flex";




// SOUND

if(currentSound){

currentSound.pause();

currentSound.currentTime=0;

}



currentSound =
document.getElementById(letter.sound);



if(currentSound){

currentSound.currentTime=0;

currentSound.play();

}



};



});





// CLOSE BUTTON

if(closeBtn){


closeBtn.onclick=()=>{


popup.style.display="none";



if(currentSound){

currentSound.pause();

currentSound.currentTime=0;

currentSound=null;

}



};


}






// CLICK OUTSIDE CLOSE

popup.onclick=(e)=>{


if(e.target===popup){


popup.style.display="none";


if(currentSound){

currentSound.pause();

currentSound.currentTime=0;

currentSound=null;

}


}


};






// NEXT QUIZ BUTTON


const nextQuizBtn =
document.getElementById("nextQuizBtn");



if(nextQuizBtn){


nextQuizBtn.onclick=()=>{


changePage("quiz");


};


}






// ICON

function getThemeIcon(theme){


switch(theme){


case "night":
return "🌙";


case "cloud":
return "☁️";


case "party":
return "🎂";


case "garden":
return "🌷";


case "romantic":
return "💗";


case "magic":
return "✨";


default:
return "💌";


}


}