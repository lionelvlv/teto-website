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
