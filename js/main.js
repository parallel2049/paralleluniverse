// safari window.innerHeight
function setFullHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    document.documentElement.style.height = `${window.innerHeight}px`;
}

document.addEventListener("DOMContentLoaded", setFullHeight);

window.addEventListener("resize", setFullHeight);


// Disable zoom
// Disable zoom iOS Safari
document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});

document.addEventListener('gesturechange', function (event) {
    event.preventDefault();
});

document.addEventListener('gestureend', function (event) {
    event.preventDefault();
});
// Disable touch zoom iOS Android
document.addEventListener('touchmove', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Disable zoom Mac
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });


document.addEventListener("DOMContentLoaded", function () {
    document.body.style.zoom = "100%";
});




