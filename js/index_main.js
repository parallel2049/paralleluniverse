// index.html stargameSound
function playSoundAndRedirect() {
    let audio = document.getElementById("stargamesound");

    // play Sound
    audio.play().then(() => {
        // Delay Jump
        setTimeout(() => {
            window.location.href = 'pages/home.html';
        }, 1000); // 1s Delay
    }).catch(error => {
        // playback fails jump directly
        console.error("Sound failed: ", error);
        window.location.href = 'pages/home.html';
    });
    // black screen
    document.querySelector('.overlay').style.opacity = 1;

}

/* black background ease-in */
document.getElementById('showOverlayBtn').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('active');
});



// safari window.innerHeight
function setFullHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    document.documentElement.style.height = `${window.innerHeight}px`;
}

document.addEventListener("DOMContentLoaded", setFullHeight);

window.addEventListener("resize", setFullHeight);
