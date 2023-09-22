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
    mainSection.classList.remove('main_class', 'drozd_main_class', 'malinovka_main_class', 'zavoronok_main_class', 'slavka_main_class');
    mainSection.classList.add('solovey_main_class');
    
    drozdPlay.classList.remove('active_drozd');
    malinovkaPlay.classList.remove('active_malinovka');
    zavoronokPlay.classList.remove('active_javoronok');
    slavkaPlay.classList.remove('active_slavka');
    soloveyPlay.classList.add('active_solovey');

    audio.src = '../js30-1.1eco-sounds/assets/audio/solovey.mp3';
    audioplayer.currentTime = 0;
    audioplayer.play();
    batonPlay.classList.add('baton_pause');
}

function justDrozdPlay(){
    mainSection.classList.remove('main_class', 'solovey_main_class', 'malinovka_main_class', 'zavoronok_main_class', 'slavka_main_class');
    mainSection.classList.add('drozd_main_class');

    soloveyPlay.classList.remove('active_solovey');
    malinovkaPlay.classList.remove('active_malinovka');
    zavoronokPlay.classList.remove('active_javoronok');
    slavkaPlay.classList.remove('active_slavka');
    drozdPlay.classList.add('active_drozd');

    audio.src = '../js30-1.1eco-sounds/assets/audio/drozd.mp3';
    audioplayer.currentTime = 0;
    audioplayer.play();
    batonPlay.classList.add('baton_pause');
}

function justMalinovkaPlay(){
    mainSection.classList.remove('main_class', 'solovey_main_class', 'drozd_main_class', 'zavoronok_main_class', 'slavka_main_class');
    mainSection.classList.add('malinovka_main_class');

    soloveyPlay.classList.remove('active_solovey');
    drozdPlay.classList.remove('active_drozd');
    zavoronokPlay.classList.remove('active_javoronok');
    slavkaPlay.classList.remove('active_slavka');
    malinovkaPlay.classList.add('active_malinovka');

    audio.src = '../js30-1.1eco-sounds/assets/audio/zarynka.mp3';
    audioplayer.currentTime = 0;
    audioplayer.play();
    batonPlay.classList.add('baton_pause');
}

function justZavoronokPlay(){
    mainSection.classList.remove('main_class', 'solovey_main_class', 'drozd_main_class', 'malinovka_main_class', 'slavka_main_class');
    mainSection.classList.add('zavoronok_main_class');

    
    soloveyPlay.classList.remove('active_solovey');
    drozdPlay.classList.remove('active_drozd');
    malinovkaPlay.classList.remove('active_malinovka');
    slavkaPlay.classList.remove('active_slavka');
    zavoronokPlay.classList.add('active_javoronok');

    audio.src = '../js30-1.1eco-sounds/assets/audio/javoronok.mp3';
    audioplayer.currentTime = 0;
    audioplayer.play();
    batonPlay.classList.add('baton_pause');
}

function justSlavkaPlay(){
    mainSection.classList.remove('main_class', 'solovey_main_class', 'drozd_main_class', 'malinovka_main_class', 'zavoronok_main_class');
    mainSection.classList.add('slavka_main_class');

    soloveyPlay.classList.remove('active_solovey');
    drozdPlay.classList.remove('active_drozd');
    malinovkaPlay.classList.remove('active_malinovka');
    zavoronokPlay.classList.remove('active_javoronok');
    slavkaPlay.classList.add('active_slavka');

    audio.src = '../js30-1.1eco-sounds/assets/audio/slavka.mp3';
    audioplayer.currentTime = 0;
    audioplayer.play();
    batonPlay.classList.add('baton_pause');
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

