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

let about = document.querySelector('.about');
let himalaya = document.querySelector('.stars');
let reds = document.querySelectorAll('.red');
about.addEventListener("mousemove", (e) => {
    himalaya.style.filter = 'blur(6px)';
    about.style.transform = `scale(1.1)`;
    for (red of reds) {
    }
})
about.addEventListener("mouseout", (e) => {
    himalaya.style.filter = '';
    about.style.transform = ``;
    about.style.transform = ``;
    for (red of reds) {    }
})