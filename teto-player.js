// TETO MUSIC PLAYER
// play/pause button
// stop button
// fast forward button
// rewind button
// skip button
// audio visualizer
// volume slider

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

var currTimetext = document.getElementById("trackTimetext");
var endTimetext = document.getElementById("totalDuration");
var stopButton = document.getElementById("stopButton");

const tetodego = {
            audio:  new Audio('./assets/music/tetodego.mp3'),
            isPlaying: false,
        }

function togglemusic() {
    if (!tetodego.isPlaying) {
        tetodego.audio.play();
    } else {
        tetodego.audio.pause();
    }
    tetodego.isPlaying = !tetodego.isPlaying;
}

function stopmusic() {
    tetodego.audio.pause();
    tetodego.audio.currentTime = 0;
    tetodego.audio.isPlaying = false;
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
function UpdateCurrentTime() {
    currTimetext.innerHTML = tetodego.audio.currentTime.toFixed(2);
    endTimetext.innerHTML = tetodego.audio.duration.toFixed(2);
}

// tetodego.audio.ontimeupdate = UpdateCurrentTime;
window.setInterval(UpdateCurrentTime, 10);

