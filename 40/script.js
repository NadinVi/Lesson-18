// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>

// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>


let array = [1, 2, [1, 2, 3, [1, 2], 4], 3, 4, [1.1, 1.2, 1.3, 1.4], 5];

const conteiner = document.querySelector(".wrapper");

function generateList(arr) {
    let ul = document.createElement("ul");


    arr.forEach(item => {
        const li = document.createElement("li");
        ul.append(li);

        if (Array.isArray(item)) {
            li.append(generateList(item));

        } else {
            li.innerText = item;
        }
    });
    return ul;
}

conteiner.append(generateList(array));