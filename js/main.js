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

    // 监听滚动和触摸滑动
    column.addEventListener("scroll", updateOpacity);
    column.addEventListener("touchmove", updateOpacity);
    column.addEventListener("wheel", updateOpacity);

    // 初始化一次
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

    // 监听滚动和触摸滑动
    column.addEventListener("scroll", updateOpacity);
    column.addEventListener("touchmove", updateOpacity);
    column.addEventListener("wheel", updateOpacity);

    // 初始化时直接调用一次
    updateOpacity();
});

document.addEventListener("DOMContentLoaded", function () {
    const column = document.querySelector(".picker-popup .column");
    const options = document.querySelectorAll(".picker-popup .option");
    const sound = document.getElementById("scrollSound");

    let lastIndex = -1; // 记录上一次播放音效的选项索引

    column.addEventListener("scroll", function () {
        let centerIndex = -1;
        let minDistance = Infinity;

        options.forEach((option, index) => {
            let rect = option.getBoundingClientRect();
            let centerY = window.innerHeight / 2; // 视口中间
            let distance = Math.abs(rect.top + rect.height / 2 - centerY);

            if (distance < minDistance) {
                minDistance = distance;
                centerIndex = index;
            }
        });

        // 如果切换到新的选项，则播放音效
        if (centerIndex !== lastIndex) {
            lastIndex = centerIndex;
            if (sound) {
                sound.currentTime = 0; // 重新播放
                sound.play().catch(err => console.log("音效播放被阻止:", err));
            }
        }
    });
});


// index.html
function playSoundAndRedirect() {
    let audio = document.getElementById("stargameSound");

    // 播放音效
    audio.play().then(() => {
        // 延迟跳转，确保音效能播放一部分
        setTimeout(() => {
            window.location.href = 'pages/home.html';
        }, 500); // 0.05秒延迟
    }).catch(error => {
        // 如果播放失败（可能因为浏览器策略），直接跳转
        console.error("音效播放失败: ", error);
        window.location.href = 'pages/home.html';
    });
}

