let body = document.querySelector('.body');
let clickImage = document.querySelector('.click');
body.addEventListener("click", (e) => {
    let x = e.pageX, y = e.pageY;
    let random = Math.floor(Math.random() * 360)
    clickImage.style.left = `${x-50}px`;
    clickImage.style.top = `${y-50}px`;
    clickImage.style.transform = `rotate(${random}deg)`;
    clickImage.style.filter = `hue-rotate(${random}deg)`;
    clickImage.style.visibility = 'visible';
    clickImage.classList.remove('pointerAnimation');
    void clickImage.offsetWidth;
    clickImage.classList.add('pointerAnimation');
})
