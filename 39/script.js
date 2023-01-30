// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.


let step = 0;
const sliderLine = document.querySelector(".slider-line");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");


document.querySelector(".next").addEventListener("click", function () {
    step += 200;
    if (step > 1000) {
        step = 0;
    }
    sliderLine.style.left = -step + 'px';

});

document.querySelector(".prev").addEventListener("click", function () {
    step -= 200;
    if (step < 0) {
        step = 1000;
    }
    sliderLine.style.left = -step + 'px';

});

btnPrev.addEventListener("click", function () {
    if (step === 0) {
        btnPrev.setAttribute('disabled', '');
    } else {
        btnPrev.removeAttribute('disabled')
    }
});

btnNext.addEventListener("click", function () {
    if (step === 1000) {
        btnNext.setAttribute('disabled', '');
    } else {
        btnNext.removeAttribute('disabled')
    }
});




