// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, 
// що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

const products = [
    {
        category: "eyeshadow",
        name: "Ninelle Barcelona Eyeshadow",
        image: "images/eyeshadow1.jpg",
        description: "Используйте составляющие набора для создания своего индивидуального и неповторимого макияжа.",
        price: "274 ₴",
    },
    {
        category: "eyeshadow",
        name: "Bless Beauty Trio Eyeshadows",
        image: "images/eyeshadow2.jpg",
        description: "С помощью аппликатора или кисточки легким движением равномерно нанести на веки глаз, выбранный вами оттенок теней, хорошо растушуйте. Старайтесь наносить тени равномерно, используя небольшое количество.",
        price: "57 ₴",
    },
    {
        category: "eyeshadow",
        name: "Chanel Ombres Multi-Effect",
        image: "images/eyeshadow3.jpg",
        description: "В каждой палетке два промежуточных оттенка для создания либо контраста, либо цветового перехода при растушевке.",
        price: "2730 ₴",
    },
    {
        category: "mascara",
        name: "L'Oreal Paris Lashes So Couture",
        image: "images/mascara1.jpg",
        description: "Для достижения наилучшего результата начинайте нанесение от корней ресниц, покачивая щеточкой и проводя ею вверх вдоль ресниц. Дайте туши возможность высохнуть. Нанесите второй или третий слой. ",
        price: "280 ₴",
    },
    {
        category: "mascara",
        name: "L`Oréal Paris Lashes Classic",
        image: "images/mascara2.jpg",
        description: "Для достижения наилучшего результата начинайте нанесение от корней ресниц, покачивая щеточкой и проводя ею вверх вдоль ресниц. Дайте туши возможность высохнуть. Нанесите второй или третий слой. ",
        price: "259 ₴",
    },
    {
        category: "mascara",
        name: "Vigo Length Mascara",
        image: "images/mascara3.jpg",
        description: "Для достижения наилучшего результата начинайте нанесение от корней ресниц, покачивая щеточкой и проводя ею вверх вдоль ресниц. Дайте туши возможность высохнуть. Нанесите второй или третий слой.",
        price: "191 ₴",
    },
    {
        category: "eyecorrector",
        name: "Bell Skin Stick Concealer",
        image: "images/eyecorrector1.jpg",
        description: "Aккуратно нанесите на области темных кругов, признаков усталости и морщинок, не растягивая кожу. Наносите небольшое количество корректора и аккуратно распределяйте его, чтобы добиться нужного эффекта.",
        price: "183 ₴",
    },
    {
        category: "eyecorrector",
        name: "Affect Cosmetics Concealer",
        image: "images/eyecorrector2.jpg",
        description: "Аккуратно нанесите на области темных кругов, признаков усталости и морщинок, не растягивая кожу. Наносите небольшое количество корректора и аккуратно распределяйте его, чтобы добиться нужного эффекта.",
        price: "597 ₴",
    },
    {
        category: "eyecorrector",
        name: "Avon True",
        image: "images/eyecorrector3.jpg",
        description: "Наносите небольшое количество корректора и аккуратно распределяйте его, чтобы добиться нужного эффекта.",
        price: "164 ₴",
    },
];

const productCategories = [
	{
		name: "eyeshadow",
	},
	{
		name: "mascara",
	},
    {
		name: "eyecorrector",
	},
];

const container = document.createElement("div");
const categories = document.createElement("div");

container.classList.add("container");
categories.classList.add("categories");

container.append(categories);
document.body.append(container);

function renderCategories(arr) {

    arr.forEach(item => {
        const categoriesItem = document.createElement("div");

        categoriesItem.classList.add("categories_item");
        categoriesItem.innerText = `${item.name}`;

        categories.append(categoriesItem);


        categoriesItem.addEventListener("click", e => {
            renderProducts(products, item.name);
        })
    })
}
renderCategories(productCategories);

function renderProducts(arr, nameCategory) {
    const deletePartProduct = document.querySelector(".part_product");
    
    if (deletePartProduct) {
        deletePartProduct.remove();
    };

    const partProduct = document.createElement("div");
    const productСontainer = document.createElement("div");

    partProduct.classList.add("part_product");
    productСontainer.classList.add("product_container");

    arr.forEach(item => {
        if (item.category === nameCategory) {

            const product = document.createElement("div");
            const productTitle = document.createElement("div");
            const productImage = document.createElement("img");

            product.classList.add("product");
            productTitle.classList.add("product_title");
            productTitle.innerText = `${item.name}`;
            productImage.classList.add("product_image");
            productImage.setAttribute("src", `${item.image}`);
            productImage.setAttribute("alt", `${item.name}`);

            
            product.append(productTitle);
            product.append(productImage);
            productСontainer.append(product);


            productImage.addEventListener("click", e => {
            renderInfo(products, item.name);
            })
        }
    })

    partProduct.append(productСontainer);
    container.append(partProduct);
};



function renderInfo(arr, nameProduct) {
    const deleteInfoContainer = document.querySelector(".info_container");
    if(deleteInfoContainer) {
        deleteInfoContainer.remove();
    }

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info_container");

    arr.forEach(item => {
        if(item.name === nameProduct) {
            const infoProduct = document.createElement("div");
            infoProduct.classList.add("info_product");

            const nameProduct = document.createElement("h3");
            nameProduct.innerText = `${item.name}`;

            const imageProduct = document.createElement("img");
            imageProduct.classList.add("image_product");
            imageProduct.setAttribute("src", `${item.image}`);
            imageProduct.setAttribute("alt", `${item.name}`);
            
            const description = document.createElement("p");
            description.innerText = `${item.description}`;
            
            const price = document.createElement("p");
            price.classList.add("price");
            price.innerText = `${item.price}`;

            const button = document.createElement("button");
            button.classList.add("button");
            button.innerText = "Купить";

            infoProduct.append(nameProduct);
            infoProduct.append(imageProduct);
            infoProduct.append(description);
            infoProduct.append(price);
            infoProduct.append(button);

            infoContainer.append(infoProduct);

            button.addEventListener("click", () => {
                alert(`Вы приобрели ${item.name}`);
                setTimeout(() =>{
                    location. reload()
                }, 500);
            })

        }

        container.append(infoContainer);
    })

}