// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const smile1 = document.querySelector(".smile1");
const smile2 = document.querySelector(".smile2");
const smile3 = document.querySelector(".smile3");
const smile4 = document.querySelector(".smile4");
const smile5 = document.querySelector(".smile5");

const number1 = document.querySelector(".number1");
number1.innerText = 'No likes';

const number2 = document.querySelector(".number2");
number2.innerText = 'No likes';

const number3 = document.querySelector(".number3");
number3.innerText = 'No likes';

const number4 = document.querySelector(".number4");
number4.innerText = 'No likes';

const number5 = document.querySelector(".number5");
number5.innerText = 'No likes';

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;



smile1.addEventListener("click", () => {
    counter1++;
    if (counter1 === 1) {
        number1.innerText = counter1 + 'like'
    } else {
        number1.innerText = counter1 + 'likes'
    }
});


smile2.addEventListener("click", () => {
    counter2++;
    if (counter2 === 1) {
        number2.innerText = counter2 + 'like'
    } else {
        number2.innerText = counter2 + 'likes'
    }
});


smile3.addEventListener("click", () => {
    counter3++;
    if (counter3 === 1) {
        number3.innerText = counter3 + 'like'
    } else {
        number3.innerText = counter3 + 'likes'
    }
});


smile4.addEventListener("click", () => {
    counter4++;
    if (counter4 === 1) {
        number4.innerText = counter4 + 'like'
    } else {
        number4.innerText = counter4 + 'likes'
    }
});


smile5.addEventListener("click", () => {
    counter5++;
    if (counter5 === 1) {
        number5.innerText = counter5 + 'like'
    } else {
        number5.innerText = counter5 + 'likes'
    }
});