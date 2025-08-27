let arr = [0, 1, 2, 3, 4, 5];
console.log(arr);
let res = arr.splice(1, 2,);
console.log(arr);
console.log(res);

arr = [0, 1, 2, 3, 4, 5];
res = arr.splice(1, 2, "q1", "q2", "q3");
console.log(arr);

arr = [0, 1, 2, 3, 4, 5];
res = arr.splice(1, 0, "q1");  // начинаем с 1-го индекса, удаляем 0 элементов, вставляем "q1"
console.log(arr);

arr = [0, 1, 2, 3, 4, 5];
res = arr.splice(3);
console.log(arr);

arr = [0, 1, 2, 3, 4, 5];
res = arr.splice(-3, 2);
console.log(arr);

console.log("--------------------slice-------------------");
let arr2 = ["a", "b", "c", "d"];
console.log(arr2);  
console.log(arr2.slice(1, 3));

console.log("--------------------flat-------------------");
let arr3 = [1, 2, ["a", "b", ["qwa", "qa"]]];
console.log(arr3);
res = arr3.flat(3); // глубина 3 flat разглаживает массив на 3 уровня
console.log(res);



// flatMap - сначала map, потом flat
console.log("--------------------flatMap-------------------");
let arr4 = ["hello", "java script"];
res = arr4.flatMap(str=> str.split("")); // разбиваем каждую строку на массив букв и потом все это "разглаживаем" в один массив 
console.log(res);

