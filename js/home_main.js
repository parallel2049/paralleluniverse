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

//home.html switch Sound
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".picker-popup .selector .column .option");
    const column = document.querySelector(".picker-popup .selector .column");
    const sound = document.getElementById("switchsound");
    let lastIndex = -1;

    function updateUI() {
        let centerY = window.innerHeight / 2;
        let minDiff = Infinity, closestIndex = -1;

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

        if (closestIndex !== lastIndex) {
            lastIndex = closestIndex;
            if (sound) {
                sound.currentTime = 0;
                sound.play().catch(err => console.log("Sound blocked:", err));
            }
        }
    }

    column.addEventListener("scroll", updateUI);
    column.addEventListener("touchmove", updateUI);
    column.addEventListener("wheel", updateUI);

});


