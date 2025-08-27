function greet(name) {
 return `Привет, ${name}!`;
}
console.log(greet);

let input = prompt("Введите целое число:");
let arr = input.split("");

arr= arr.map( (a)=> Number(a))
console.log(arr);

