const audioplayer = document.querySelector('audio');
const batonPlay = document.querySelector('.baton_play');
//const batonPause = document.querySelector('.baton_pause');
const mainSection = document.querySelector('.main_class');
const soloveyPlay = document.querySelector('.name_solovey');
const drozdPlay = document.querySelector('.name_drozd');
const malinovkaPlay = document.querySelector('.name_malinovka');
const zavoronokPlay = document.querySelector('.name_zavoronok');
const slavkaPlay = document.querySelector('.name_slavka');

const audio = new Audio();

let isPlayBaton = false;

let playNumberClick = 0;


function justPlayAudio() {
    audioplayer.currentTime = 0;
    audioplayer.play();

    if (!isPlayBaton){
        audioplayer.play();
        isPlayBaton = true;
    } else{
        audioplayer.pause();
        isPlayBaton = false;
    }

}

function toggleBaton(){
    batonPlay.classList.toggle('baton_pause');
}

//function justPauseAudio() {
//    audioplayer.pause();
//    isPlayBaton = false;
//}

function justSoloveyPlay(){
    mainSection.classList.toggle('solovey_main_class');


}

function justDrozdPlay(){
    mainSection.classList.toggle('drozd_main_class');
}

function justMalinovkaPlay(){
    mainSection.classList.toggle('malinovka_main_class');
}

function justZavoronokPlay(){
    mainSection.classList.toggle('zavoronok_main_class');
}

function justSlavkaPlay(){
    mainSection.classList.toggle('slavka_main_class');
}

batonPlay.addEventListener('click', justPlayAudio);
batonPlay.addEventListener('click', toggleBaton);

soloveyPlay.addEventListener('click', justSoloveyPlay);
drozdPlay.addEventListener('click', justDrozdPlay);
malinovkaPlay.addEventListener('click', justMalinovkaPlay);
zavoronokPlay.addEventListener('click', justZavoronokPlay);
slavkaPlay.addEventListener('click', justSlavkaPlay);
//batonPause.addEventListener('click', justPauseAudio);

//function playBaton(){}

