const audioplayer = document.querySelector('audio');
const buttonPlayArrow = document.querySelector('.conteiner_arrow_play')
const imageBackgr = document.querySelector('.image_back');

const buttonNextArrow = document.querySelector('.conteiner_arrow_next');
const buttonBeforArrow = document.querySelector('.conteiner_arrow_befor');
const fotoSingerImg = document.querySelector('.image');

const changeSong = document.querySelector('#my_song');
const nameSinger = document.querySelector('.audio_autor');
const nameSong = document.querySelector('.audio_song');

const justProgressBar = document.querySelector('#progress_bar');

const audio = new Audio();

let isPlayButton = false;

let playNumberClick = 0;
let numberSong = 0;

fotoSingersImg = ['../js30-1.1eco-sounds/assets/img/iskorki.jpg', '../js30-1.1eco-sounds/assets/img/nevspominai.jpg', '../js30-1.1eco-sounds/assets/img/dabro.jpg'];
singers = ['5УТРА', 'NILETTO, Лёша Свик, Олег Майами', 'Dabro'];
nameSongs = ['Искорки', 'Не вспоминай', 'Юность'];
allSongs = ['../js30-1.1eco-sounds/assets/audio/1Iskorki.mp3', '../js30-1.1eco-sounds/assets/audio/2NeVspominai.mp3', '../js30-1.1eco-sounds/assets/audio/3DaBro.mp3'];

function justPlayAudio() {
    audioplayer.currentTime = 0;
    audioplayer.play();

    if (!isPlayButton) {
        audioplayer.play();
        isPlayButton = true;
        buttonPlayArrow.classList.remove('conteiner_arrow_play');
        buttonPlayArrow.classList.add('button_pause');
        buttonPlayArrow.classList.add('after_click');
        fotoSingerImg.style.transform = "scale(1.1)";
    } else {
        audioplayer.pause();
        isPlayButton = false;
        buttonPlayArrow.classList.remove('button_pause');
        buttonPlayArrow.classList.add('conteiner_arrow_play');
        buttonPlayArrow.classList.remove('after_click');
        fotoSingerImg.style.transform = "scale(1)";
    }

    //imageBackgr.classList.remove('img_backgr');
    //imageBackgr.classList.add('img_backgr_2');

}

//function toggleButton(){
// buttonPlayArrow.classList.remove('conteiner_arrow_play');
// buttonPlayArrow.classList.add('button_pause');
//}

//function toggleButton2(){
// buttonPlayArrow.classList.remove('button_pause');
//buttonPlayArrow.classList.add('conteiner_arrow_play');
//}



function clickNextSong() {
    numberSong++;
    if (numberSong > 2) {
        numberSong = 0;
        fotoSingerImg.style.transform = "scale(1.1)";

    }
    imageBackgr.src = fotoSingersImg[numberSong];
    fotoSingerImg.src = fotoSingersImg[numberSong];
    nameSinger.innerHTML = singers[numberSong];
    nameSong.innerHTML = nameSongs[numberSong];
    changeSong.src = allSongs[numberSong];

    buttonPlayArrow.classList.remove('conteiner_arrow_play');
    buttonPlayArrow.classList.add('button_pause');

    isPlayButton = false;
    justPlayAudio();
    //toggleButton();
}

function clickBeforSong() {
    numberSong--;
    if (numberSong < 0) {
        numberSong = 2;
        fotoSingerImg.style.transform = "scale(1.1)";

    }
    imageBackgr.src = fotoSingersImg[numberSong];
    fotoSingerImg.src = fotoSingersImg[numberSong];
    nameSinger.innerHTML = singers[numberSong];
    nameSong.innerHTML = nameSongs[numberSong];
    changeSong.src = allSongs[numberSong];

    buttonPlayArrow.classList.remove('conteiner_arrow_play');
    buttonPlayArrow.classList.add('button_pause');

    isPlayButton = false;
    justPlayAudio();
    //toggleButton();
    //toggleButton2();
}

/*audio.addEventListener("music",() => {
        justProgressBar.querySelector(".time .after_time").textContent = getTimeCodeFromNum(
        audio.duration );
    }, false);

  const timeline = justProgressBar.querySelector(".timeline_bar");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
    const progressBar = justProgressBar.querySelector(".progress_bar");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    justProgressBar.querySelector(".time .under_time").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);


  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }*/

function startJustProgressBar() {
    const underTime = document.querySelector('.under_time');
    const afterTime = document.querySelector('.after_time');

    justProgressBar.max = changeSong.afters;
    justProgressBar.value = changeSong.under;
    underTime.innerHTML = (getTime(Math.floor(changeSong.under)));
    if (afterTime.innerHTML === "NaN:NaN") {
        afterTime.innerHTML = "0:00";
    } else {
        afterTime.innerHTML = (getTime(Math.floor(changeSong.afters)));
    }
}

function getTime(secondsTime) {
    let minutes = Math.floor((secondsTime / 60));
    let seconds = Math.floor(secondsTime - (minutes * 60));
    if (seconds < 10) {
        seconds = `0${seconds}`;
    };
    return `${minutes}:${seconds}`;
};

setInterval(startJustProgressBar, 500);

function justProgressBarChange() {
    changeSong.under = justProgressBar.value;
};


buttonPlayArrow.addEventListener('click', justPlayAudio);
//buttonPlayArrow.addEventListener('click', toggleButton);
buttonNextArrow.addEventListener('click', clickNextSong);
buttonBeforArrow.addEventListener('click', clickBeforSong);

/*
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
*/


