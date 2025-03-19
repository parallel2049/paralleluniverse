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
