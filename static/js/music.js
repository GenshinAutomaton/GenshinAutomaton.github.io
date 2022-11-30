const title = document.querySelector('.msc_title');
const prev = document.querySelector('.msc_prev');
const play = document.querySelector('.msc_play');
const next = document.querySelector('.msc_next');
const audio = document.querySelector('audio');
const titleBg = document.querySelector('.msc_title_bg');

const songList = [
    {
        path: "static/msc/心如止水.mp3",
        songName: "原神 | 心如止水",
    },
    {
        path: "static/msc/一梦千宵.mp3",
        songName: "一梦千宵",
    },
    {
        path: "static/msc/胡桃嗷.mp3",
        songName: "胡桃 | 嗷",
    },
    {
        path: "static/msc/四万秋.mp3",
        songName: "四万秋",
    },
    {
        path: "static/msc/原梦纪.mp3",
        songName: "原梦纪",
    }
];

let song_Playing = false;

// play song
function playSong() {
    song_Playing = true;
    audio.play();
    audio.volume = 0.05;
    // change icon
    play.innerHTML = '<img src="static/image/play.svg">';
    titleBg.style.opacity = "0.7";
    titleBg.style.transform = "translateY(25px)";
}

// pause song
function pauseSong() {
    song_Playing = false;
    audio.pause();
    // change icon
    play.innerHTML = '<img src="static/image/pause.svg">';
    titleBg.style.opacity = "0";
    titleBg.style.transform = "translateY(50px)";
}

play.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()))

// load song
function loadSong(song) {
    title.textContent = song.songName;
    audio.src = song.path;
}

// current song
let i = 0;

// on load - select first song from song list
loadSong(songList[i]);

function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    if (song_Playing == true) {
        playSong();
    }
}
function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i]);
    if (song_Playing == true) {
        playSong();
    }
}
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
audio.addEventListener("ended", nextSong);