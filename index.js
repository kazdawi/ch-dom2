document.addEventListener('DOMContentLoaded', function () {
    const btnColor = document.getElementById("change-color-btn");
    const divColor = document.getElementById("color-box");

    function getRandomColor() {
        return '#' + Math.random().toString(16).slice(-6);
    }

    btnColor.addEventListener('click', function () {
        var x = divColor.style.backgroundColor = getRandomColor()
        btnColor.style.color = x;

})

})

