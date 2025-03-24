//home.html picker-popup
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".picker-popup .selector .column .option");
    const column = document.querySelector(".picker-popup .selector .column");
    const sound = document.getElementById("switchsound");
    let lastIndex = 0;
    let isScrolling = false;

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
            if (index === closestIndex) {
                option.style.height = "28vh";
                option.style.opacity = "1";
            } else if (index === closestIndex - 1 || index === closestIndex + 1) {
                option.style.height = "22vh";
                option.style.opacity = "0.7";
            } else {
                option.style.height = "16vh";
                option.style.opacity = "0.5";
            }
        });

        if (closestIndex !== lastIndex) {
            lastIndex = closestIndex;
            if (sound) {
                sound.currentTime = 0;
                sound.play().catch(err => console.log("Sound blocked:", err));
            }
        }

        isScrolling = false;
    }

    function onScroll() {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(updateUI);
        }
    }

    column.addEventListener("scroll", onScroll);
    column.addEventListener("touchmove", onScroll);
    column.addEventListener("wheel", onScroll);

    updateUI();
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





