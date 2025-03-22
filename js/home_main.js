//home.html
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".picker-popup .selector .column .option");
    const column = document.querySelector(".picker-popup .selector .column");

    function updateOpacity() {
        let centerY = window.innerHeight / 2;
        let minDiff = Infinity;
        let closestIndex = -1;

        options.forEach((option, index) => {
            const rect = option.getBoundingClientRect();
            const optionCenter = rect.top + rect.height / 2;
            const diff = Math.abs(optionCenter - centerY);

            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });

        options.forEach((option, index) => {
            option.style.opacity = index === closestIndex ? "1" : "0.5";
        });
    }

    // Listening for scrolling and touch sliding
    column.addEventListener("scroll", updateOpacity);
    column.addEventListener("touchmove", updateOpacity);
    column.addEventListener("wheel", updateOpacity);

    // Initialize once
    updateOpacity();
});
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".picker-popup .selector .column .option");
    const column = document.querySelector(".picker-popup .selector .column");

    function updateOpacity() {
        let centerY = window.innerHeight / 2;
        let minDiff = Infinity;
        let closestIndex = -1;

        options.forEach((option, index) => {
            const rect = option.getBoundingClientRect();
            const optionCenter = rect.top + rect.height / 2;
            const diff = Math.abs(optionCenter - centerY);

            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });

        options.forEach((option, index) => {
            option.style.opacity = index === closestIndex ? "1" : "0.5";
        });
    }

    // Listening for scrolling and touch sliding
    column.addEventListener("scroll", updateOpacity);
    column.addEventListener("touchmove", updateOpacity);
    column.addEventListener("wheel", updateOpacity);

    // Initialize once
    updateOpacity();
});

//home.html switch Sound
document.addEventListener("DOMContentLoaded", function () {
    const column = document.querySelector(".picker-popup .column");
    const options = document.querySelectorAll(".picker-popup .option");
    const sound = document.getElementById("switchsound");

    let lastIndex = -1;

    column.addEventListener("scroll", function () {
        let centerIndex = -1;
        let minDistance = Infinity;

        options.forEach((option, index) => {
            let rect = option.getBoundingClientRect();
            let centerY = window.innerHeight / 2;
            let distance = Math.abs(rect.top + rect.height / 2 - centerY);

            if (distance < minDistance) {
                minDistance = distance;
                centerIndex = index;
            }
        });

        // switch to a new option, the sound effect plays
        if (centerIndex !== lastIndex) {
            lastIndex = centerIndex;
            if (sound) {
                sound.currentTime = 0; // again
                sound.play().catch(err => console.log("Sound blocked:", err));
            }
        }
    });
});

//home.html bgm
window.addEventListener('DOMContentLoaded', () => {
    const bgm = document.getElementById("homebgm");
    // autoplay
    bgm.play().catch(() => {
        console.log("autoplay");
    });
    // click play
    document.body.addEventListener("click", () => {
        bgm.play();
    }, { once: true }); // just onece
});


