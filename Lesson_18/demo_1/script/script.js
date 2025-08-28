const jack = {
    name: "Jack",
    age: 25,
    info: function () {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
};
const ann = {
    firstName: "Anna",
    lastName: "Smith",
    age: 24,
   

}

console.log(jack);
console.log(ann);

let users = [jack, ann, { name: "John", age: 20 }];
console.log(users);

console.log(jack.name);
jack.age = 30;
console.log(jack);

ann.name = "Ann";
delete ann.firstName;
console.log(ann);
console.log(ann.children); // undefined, такого свойства нет
ann.children = undefined;

if (!`children` in ann) {
    console.log("нет свойства children");
} else {
    console.log("есть свойство children");
};

console.log("-------------------");
console.log(ann["name"]);

console.log("----------перебор значений----------");
for (let key in ann) {
    let value = ann[key]; // значение свойства которое хранится в переменной key 
    console.log(`${key}: ${value}`);
};

console.log(jack.info); // выводит саму функцию как значение свойства info
console.log(jack.info()); // выводит результат выполнения функции info

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.info = function () {
        console.log(`name: ${this.name}, age: ${this.age}`);
    };
}


let peter = new Person("Peter", 32);
console.log(peter); 
peter.info();