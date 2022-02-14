let slideButtonLeft = document.querySelector('.main__slider-button_left');
let slideButtonRight = document.querySelector('.main__slider-button_right');
let slides = document.querySelectorAll('img');

let i = 0;
console.log(slides.length);

function changeImageLeft() {
    i = i - 1;
    if (i < 0) {
        slides[i + 1].classList.remove("main__slide");
        i = slides.length - 1;
        slides[i].classList.add("main__slide");
    } else {
        slides[i + 1].classList.remove("main__slide");
        slides[i].classList.add("main__slide");
    }
}

function changeImageRight() {
    i = i + 1;
    if (i >= slides.length) {
        slides[i-1].classList.remove("main__slide");
        i = 0;
        slides[i].classList.add("main__slide");
    } else {
        slides[i-1].classList.remove("main__slide");
        slides[i].classList.add("main__slide");
    }
}

slideButtonLeft.addEventListener("click", changeImageLeft);
slideButtonRight.addEventListener("click", changeImageRight);