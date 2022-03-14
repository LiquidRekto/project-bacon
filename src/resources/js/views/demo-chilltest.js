var socket = io();

var TIMER_TIME = 0;
var CURRENT_QUESTION = 0
const TOTAL_OF_QUESTIONS = 20;

function UpdateInfo() {

}

function StartTimer(timeText, time) {
    // Just timer stuff
    TIMER_TIME = time;
    var t = setInterval(function() {
        var hours = Math.floor(TIMER_TIME / 3600);
        var minutes = Math.floor((TIMER_TIME - hours*3600) / 60);
        var seconds = Math.floor(TIMER_TIME - hours*3600 - minutes*60);

        timeText.innerText = (hours < 10 ? "0" : "") + hours.toString() + ":" + (minutes < 10 ? "0" : "") + minutes.toString() + ":" + (seconds < 10 ? "0" : "") + seconds.toString();
        if (TIMER_TIME <= 10) {
            timeText.classList.toggle("text-red-500");
            setTimeout(function() {
                timeText.classList.toggle("text-red-500");
            },500);
        }
        
        TIMER_TIME--;
        if (TIMER_TIME < 0) {
            clearInterval(t);
            alert("TIMES UP! TEST HAS BEEN FINISHED!");
        }
    },1000);
    
}



var answerBoxes = document.getElementsByClassName('answer-box');

Array.from(answerBoxes).forEach((box) => {
    // SPAGHETTI CODE ALERT!
    // Still finding an appropiate solution right here

    console.log(box.dataset);

    box.addEventListener('click', () => {
        var i,k;

        Array.from(answerBoxes).forEach((rebox) => {
            rebox.classList.remove("bg-bc_box_purple_bg","border-bc_box_purple_bd");
            rebox.classList.add("bg-[#fdfdfd]");
            for (k=0; k<rebox.children.length; k++) {
                var elem = rebox.children[k];
                if (elem.dataset.name == "letter-box") {
                    elem.classList.remove("text-bc_box_purple_bg","border-bc_box_purple_bd");
                } else if (elem.dataset.name == "answer-label") {
                    elem.classList.remove("text-white");
                }
            }
            box.dataset.isclicked === "false";
        });

        var clicked = (box.dataset.isclicked === "true");
        console.log(clicked);
        if (!clicked) {
            box.classList.remove("bg-[#fdfdfd]");
            box.classList.add("bg-bc_box_purple_bg","border-bc_box_purple_bd");
            
            for (i=0; i<box.children.length; i++) {
                var elem = box.children[i];
                if (elem.dataset.name == "letter-box") {
                    elem.classList.add("text-bc_box_purple_bg","border-bc_box_purple_bd");
                } else if (elem.dataset.name == "answer-label") {
                    elem.classList.add("text-white");
                }
            }
            box.dataset.isclicked === "true";
        }
    });
});

console.log("WHY?");

var timerText = document.getElementById('timer-text');

StartTimer(timerText,600);


