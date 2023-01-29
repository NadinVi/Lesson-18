// Реалізовуємо форму для реєстрації.
// Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.


const register = document.getElementById("register");
const close = document.getElementById("close");
const containerUs = document.querySelector(".user-container");


let users =[];

function renderUsers(users) {
    const TRs = [];

    for(let key in users) {
        TRs.push(`<tr>
        <td>${users[key]}</td>
        </tr>`)
    }
    
    containerUs.innerHTML = `<table>${TRs.join("")}</table>`
}



function toggleElement() {
    const modal = document.querySelector(".modal-container");
    modal.classList.toggle("d-none");
}


register.addEventListener("click", () => {
    toggleElement();
    const add = document.getElementById("add");
    add.addEventListener("click", () => {
        createUser();
        toggleElement();
    }) 

})

close.addEventListener("click", () => {
    toggleElement();
})


function createUser() {
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    const dateOfBirthd = document.getElementById("dateOfBirthd").value;
    const gender = document.querySelector(`input[name="radio-group"]`).id;
    const select = document.querySelector(".select").value;
    const adress = document.getElementById("adress").value;

    const newUser = {firstName, secondName, dateOfBirthd, gender, select, adress};

    console.log(newUser);
    users.push(newUser);
    renderUsers(newUser);

}

