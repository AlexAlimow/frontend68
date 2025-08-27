AIT logo
Student cabinet
Scheduler
js
Cohort 68m
Front_end
Lesson Nr: 15
Lecture
Mon, 25.08.2025
Andrey Belov
Функции
Создание функций
Function Declaration — как привычное объявление метода.
function greet(name) {
    return `Привет, ${name}`;
}
Copy
Вызвать функцию, объявленную таким образом, можно вызвать до объявления.

Function Expression — функция как значение переменной.
const greet = function(name) {
    return `Привет, ${name}`;
};
Copy
Arrow Function — компактная запись.
const greet = name => `Привет, ${name}`;
Copy
Параметры и возвращаемое значение
В отличие от JAVA в JS у функции параметры и результат не типизированные

Например:

function add(a, b) { return a + b; }
Copy
В данную функцию можно передать любые параметры

add(10,20) // 30
add('hello',' js') // 'hello js' 
add(10) // NaN 
Copy
и может вернуть что угодно, и даже если передали строки — он попытается их сложить, и вернуть результат.
Если не передать параметр, его значение будет undefined

Параметры по умолчанию
function greet(name = "гость") {
  return `Привет, ${name}!`;
}

console.log(greet()); // Привет, гость!
Copy
Значение параметра будет использовано,
если аргумент undefined или не передан
Функция, как данные
В JS функция - это объект.
В JS можно:

Передать функцию в аргумент
Вернуть функцию из функции
Хранить в массиве/объекте
Например:

function greetUser(name, func) {
    console.log(`Привет, ${name}!`);
    func();
}

function sayHowAreYou() {
    console.log("Как дела?");
}

greetUser("Анна", sayHowAreYou);

// Вывод:
// Привет, Анна!
// Как дела?
Copy
в этом примере функция sayHowAreYou является параметром для функции greetUser. Мы можем в greetUser передать любую функцию, тем самым "на лету" изменять поведение функции greetUser. Говорят, sayHowAreYou - колбэк функция.

REST - параметр.
Rest-параметр (...) позволяет функции принимать неограниченное количество аргументов и собирать их в массив.

function func(a, b, ...rest) {
    console.log(a);     // первый аргумент
    console.log(b);     // второй аргумент
    console.log(rest);  // остальные аргументы в массиве
}
Copy
рест параметр всегда единственный и всегда последний

Callback
Колбэк — это функция, которую мы передаём в другую функцию как аргумент, чтобы та вызвала её позже, в определённый момент.
Ключевая идея в том, что мы передаём функцию в другую функцию и ожидаем, что она вызовется (от англ. «call back» – обратный вызов) когда-нибудь, если это будет необходимо.

function createOrder(orderDetails, onSuccess) {
    console.log(`Заказ создан: ${orderDetails}`);
    onSuccess();
}

function sendEmailNotification() {
    console.log("Отправлено письмо клиенту с подтверждением заказа");
}

// Используем:
createOrder("Товар: ноутбук, цена: 1000$", sendEmailNotification);
Copy
Основные методы массивов в JavaScript
push() — добавляет элемент в конец
pop() — удаляет последний элемент
unshift() — добавляет элемент в начало
shift() — удаляет первый элемент
let arr = [1, 2, 3];
arr.push(4);    // [1, 2, 3, 4]
arr.pop();      // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift();    // [1, 2, 3]
Copy
Изменение
slice(start, end) — возвращает копию части массива (не изменяет оригинал)
splice(start, deleteCount, ...items) — удаляет/добавляет элементы (изменяет массив)
let arr = ["a", "b", "c", "d"];
console.log(arr.slice(1, 3)); // ["b", "c"]
arr.splice(1, 2, "x", "y");   // ["a", "x", "y", "d"]
Copy
Поиск
indexOf(value) — индекс первого вхождения
lastIndexOf(value) — индекс последнего вхождения
includes(value) — проверка наличия
let arr = [1, 2, 3, 2];
console.log(arr.indexOf(2));      // 1
console.log(arr.lastIndexOf(2));  // 3
console.log(arr.includes(3));     // true
Copy
Перебор элементов
forEach() — выполняет функцию для каждого элемента
map() — создаёт новый массив, преобразуя элементы
filter() — возвращает массив элементов, прошедших проверку
reduce() — сводит массив к одному значению
some() — проверяет, есть ли хоть один элемент, удовлетворяющий условию
every() — проверяет, все ли элементы удовлетворяют условию
let arr = [1, 2, 3, 4, 5];

arr.forEach(n => console.log(n * 2)); 
// 2 4 6 8 10

let squares = arr.map(n => n * n);
console.log(squares); // [1, 4, 9, 16, 25]

let even = arr.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

let sum = arr.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

console.log(arr.some(n => n > 4));  // true
console.log(arr.every(n => n > 0)); // true
Copy
Сортировка
sort() — сортирует массив (по умолчанию как строки)
reverse() — переворачивает массив
let nums = [10, 5, 2];
nums.sort();         // ["10", "2", "5"] (строковая сортировка!)
nums.sort((a, b) => a - b); // [2, 5, 10]

nums.reverse(); // [10, 5, 2]
Copy
Методы строк в JS и Java
Действие	JavaScript	Java
Длина строки	str.length (свойство)	str.length() (метод)
Получить символ	str.charAt(i) или str[i]	str.charAt(i)
Найти индекс подстроки	str.indexOf("sub")	str.indexOf("sub")
Найти последний индекс	str.lastIndexOf("sub")	str.lastIndexOf("sub")
Проверка наличия	str.includes("sub")	str.contains("sub")
Начинается с…	str.startsWith("He")	str.startsWith("He")
Заканчивается на…	str.endsWith("ld")	str.endsWith("ld")
Вырезать подстроку	str.slice(start, end) или str.substring(start, end)	str.substring(start, end)
Замена первого вхождения	str.replace("old","new")	str.replace("old","new")
Замена всех вхождений	str.replaceAll("old","new")	str.replaceAll("old","new")
Удаление пробелов по краям	str.trim()	str.trim()
Удаление пробелов слева/справа	str.trimStart(), str.trimEnd()	нет (нужно вручную через regex)
Привести к верхнему регистру	str.toUpperCase()	str.toUpperCase()
Привести к нижнему регистру	str.toLowerCase()	str.toLowerCase()
Разбить строку	"a,b,c".split(",")	"a,b,c".split(",")
Соединить массив обратно в строку	arr.join("-")	String.join("-", list) (Java 8+)
Повтор строки	"Hi".repeat(3)	"Hi".repeat(3) (Java 11+)
Интерполяция (шаблонные строки)	`Hello, ${name}`	String.format("Hello, %s", name)
