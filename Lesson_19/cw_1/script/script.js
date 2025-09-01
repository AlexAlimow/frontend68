/*
a) Создайте несколько объектов-продуктов. В каждом объекте должно быть поле name (название), description(описание), price(цена), info (функция, которая формирует строку вида: товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...

b) создайте конструктор для создания объектов-товаров. Создайте несколько товаров

с) Создайте массив из товаров. Напишите функцию, которая выводит в консоль информацию о всех товарах в виде:
*/

const item1 = { name: "Lenovo", price: 1000, description: "High performance laptop", info: function () { return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`; } };

console.log(item1);
console.log(item1.info());

function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.info = function () {
        return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
    };
}


console.log("-----Создание товаров через конструктор-----");
const item2 = new Product("Asus", 900, "Affordable laptop");
const item3 = new Product("Acer", 800, "Budget laptop");
console.log(item2);
console.log(item2.info());
console.log(item3);
console.log(item3.info());

console.log("-----Массив товаров-----");
const products = [item1, item2, item3, new Product("Новый Iphone", 1200, "New generation smartphone")];
console.log(products);

for (let i = 0; i < products.length; i++) {
    console.log(`Товар ${i + 1}`);
    for (let key in products[i]) {
        if (typeof products[i][key] === "function") {
            console.log(`   ${key}: ${products[i][key]()}`);
        } else {
            console.log(`   ${key}: ${products[i][key]}`);
        }
    }
};

