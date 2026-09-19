// =====================================
// PAGE SYSTEM
// =====================================


function changePage(pageID){


    document
    .querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove("active");

    });



    const targetPage =
    document.getElementById(pageID);



    if(targetPage){

        targetPage.classList.add("active");

    }


}









// =====================================
// AUDIO SETUP
// =====================================


const music =
document.getElementById("bgMusic");


if(music){

    music.volume = 0.25;

}



const clickSound =
document.getElementById("clickSound");



const meowSound =
document.getElementById("meowSound");



// =====================================
// START BUTTON
// =====================================


const startBtn =
document.getElementById("startBtn");



if(startBtn){


    startBtn.addEventListener(
    "click",
    ()=>{


        playClick();



        if(music){


            music.play()
            .catch(()=>{
                console.log("Music waiting for interaction");
            });


        }



        changePage("letters");



    });


}



// =====================================
// COUNTDOWN 21 SEPTEMBER
// =====================================



let birthday =
new Date(
    new Date().getFullYear(),
    8,
    21,
    0,
    0,
    0
);



let today =
new Date();



if(birthday < today){


    birthday.setFullYear(
        birthday.getFullYear()+1
    );


}





function countdown(){


    let now =
    new Date();



    let distance =
    birthday - now;



    if(distance < 0){

        distance = 0;

    }





    let days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );




    let hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );





    let minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );





    let seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );






    const dayElement =
    document.getElementById("days");

    const hourElement =
    document.getElementById("hours");

    const minuteElement =
    document.getElementById("minutes");

    const secondElement =
    document.getElementById("seconds");





    if(dayElement)
    dayElement.innerHTML = days;



    if(hourElement)
    hourElement.innerHTML = hours;



    if(minuteElement)
    minuteElement.innerHTML = minutes;



    if(secondElement)
    secondElement.innerHTML = seconds;



}






setInterval(
countdown,
1000
);


countdown();











// =====================================
// CURSOR CAT 🐱
// =====================================



const cursorCat =
document.querySelector(".cursor-cat");



if(cursorCat){



document.addEventListener(
"mousemove",
(e)=>{


    cursorCat.style.left =
    e.clientX + 20 + "px";



    cursorCat.style.top =
    e.clientY + 20 + "px";


});





cursorCat.addEventListener(
"click",
()=>{


    if(meowSound){


        meowSound.currentTime = 0;


        meowSound.play()
        .catch(()=>{});


    }


});


}











// =====================================
// CLICK SOUND
// =====================================



function playClick(){



    if(clickSound){



        clickSound.currentTime = 0;



        clickSound.play()
        .catch(()=>{});



    }


}






// =====================================
// FLOATING HEARTS
// =====================================



function createHeart(){



    const heart =
    document.createElement("div");



    heart.className =
    "heart";



    heart.innerHTML =
    "♡";



    heart.style.left =
    Math.random()*100 + "%";



    heart.style.animationDuration =
    (4 + Math.random()*5) + "s";




    const heartContainer =
    document.querySelector(".hearts");



    if(heartContainer){


        heartContainer.appendChild(heart);


    }






    setTimeout(()=>{


        heart.remove();



    },8000);



}







setInterval(
createHeart,
600
);