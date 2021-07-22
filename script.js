document.body.addEventListener('keyup', () => {
    playSound(event.code.toLowerCase());
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    if(song != "") {
        let music = song.split('');
        playMusic(music);
    }

})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 360);
    }
}

function playMusic(music) {
    let armonic = 0;
    for(let item of music) {
        setTimeout(() => {
            playSound(`key${item}`)
        }, armonic);
        armonic += 250;
    }
}