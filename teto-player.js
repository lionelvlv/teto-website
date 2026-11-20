// TETO MUSIC PLAYER
// play/pause button
// stop button
// skip button
// audio visualizer
// volume slider

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
var albumArt = document.getElementById("albumArt");

var songText = document.getElementById("songText");
var currTimetext = document.getElementById("trackTimetext");
var endTimetext = document.getElementById("totalDuration");

var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");

var fastfwdButton = document.getElementById("fastfwdButton");
var reverseButton = document.getElementById("reverseButton");

var volumeSlider = document.getElementById("volumeSlider");
var seeker = document.getElementById("seeker");

const nosong = "no song playing :(";

const tetodego = {
            name: "Teto De GO!!",
            audio:  new Audio('./assets/music/tetodego.mp3'),
            isPlaying: false,
            art: "assets/art/album/TETODEOGOALBUMART.jpg",
        }
const FUKKIRETA = {
            name: "FUKKIRETA",
            audio: new Audio('./assets/music/FUKKIRETA.mp3'),
            isPlaying: false,
            art: "assets/art/album/FUKKIRETA.jpg",
}

var songs = [tetodego, FUKKIRETA];
var songIndex = 0;
var currSong = songs[songIndex];


function togglemusic() {
    if (!currSong.isPlaying) {
        currSong.audio.play();
        songText.innerHTML = currSong.name;
        albumArt.src = currSong.art;
        albumArt.style.visibility = 'visible';
    } else {
        currSong.audio.pause();
    }
    currSong.isPlaying = !currSong.isPlaying;
}

function stopmusic() {
    if (!currSong.isPlaying) {
        return;
    }
    currSong.audio.pause();
    currSong.audio.currentTime = 0;
    currSong.audio.isPlaying = false;
    updateSeeker(0);
    // songText.innerHTML = nosong;
    // albumArt.style.visibility = 'hidden';
}

function nextSong() {
    stopmusic();
    songIndex = (songIndex + 1) % songs.length;
    currSong = songs[songIndex];
    songText.innerHTML = currSong.name;
    albumArt.src = currSong.art;
    albumArt.style.visibility = 'visible';
}

function prevSong() {
    stopmusic();
    songIndex = (songIndex - 1) % songs.length;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    currSong = songs[songIndex];
    songText.innerHTML = currSong.name;
    albumArt.src = currSong.art;
    albumArt.style.visibility = 'visible';
}
// Source - https://stackoverflow.com/a/3733257
// Posted by Gumbo, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-19, License - CC BY-SA 4.0
function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
function UpdateCurrentTime() {
    // convert to minutes and seconds
    var currentTimeMin = Math.floor(currSong.audio.currentTime / 60);
    var currentTimeSeconds = (currSong.audio.currentTime - currentTimeMin * 60);

    var totalDurationMin = Math.floor(currSong.audio.duration / 60);
    var totalDurationSeconds = (currSong.audio.duration - totalDurationMin * 60);

    // TODO: what the fuck is this shit    
    currTimetext.innerHTML = str_pad_left(currentTimeMin, '0', 2) + ':' + str_pad_left(currentTimeSeconds, '0', 2);
    endTimetext.innerHTML = str_pad_left(totalDurationMin, '0', 2) + ':' + str_pad_left(totalDurationSeconds, '0', 2);

    updateSeeker(currSong.audio.currentTime);
}


function updateSeeker(time) {
    seeker.value = time;
}
// tetodego.audio.ontimeupdate = UpdateCurrentTime;
window.setInterval(UpdateCurrentTime, 10);

seeker.oninput = function() { 
    currSong.audio.currentTime = this.value;
}

volumeSlider.oninput = function () {
    currSong.audio.volume = this.value / 100;
}
