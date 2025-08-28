/*
a) Создайте несколько объектов-продуктов. В каждом объекте должно быть поле name (название), description(описание), price(цена), info (функция, которая формирует строку вида: товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...

b) создайте конструктор для создания объектов-товаров. Создайте несколько товаров

с) Создайте массив из товаров. Напишите функцию, которая выводит в консоль информацию о всех товарах в виде:

Tовар 1
    name: notebook lenovo thinkpad
    price: 1283
    description: .....
    info: ....
Copy
т.е. поле: значение При этом: поля, которые являются функциями, нужно выводить результат работы функции (не текст функции) */


console.log("-----Создание объектов товаров-----");
const product1 = {
    name: "notebook lenovo thinkpad",
    description: "cpu intel core7, ram:16gb",
    price: 1283,
    info: function () {
        return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
    }
};
const product2 = {
    name: "notebook asus",
    description: "cpu intel core5, ram:8gb",
    price: 900,
    info: function () {
        return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
    }
};

console.log(product1.info());
console.log(product2.info());

console.log("-----Создание конструктора товаров-----");

function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        return (`товар: ${this.name}; цена: ${this.price} описание: ${this.description}`);
    };
};

let product3 = new Product("notebook hp", "cpu amd, ram:16gb", 1100);
let product4 = new Product("notebook acer", "cpu intel core3, ram:4gb", 700);

console.log(product3.info());
console.log(product4.info());

console.log("-----Массив товаров-----");
let products = [product1, product2, product3, product4];

function showProducts(arr) {
    arr.forEach((product, index) => {
        console.log(`Товар ${index + 1}`);
        for (let key in product) {
            if (typeof product[key] === "function") {
                console.log(`   ${key}: ${product[key]()}`); 
            } else {
                console.log(`   ${key}: ${product[key]}`);
            }
        }
    });
}

showProducts(products);
