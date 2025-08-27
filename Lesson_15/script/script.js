console.log(sum(10,19)); //29

let a = 1;
let b = 5; 
console.log(sum(a,b)); //15

a = "qwe";
b = "qwo";
console.log(sum(a,b));  "qweqwo"

a = 10;
b = "qwo";
console.log(sum(a,b)); // "10qwo"


a = 10;
console.log(sum(a));


console.log(sum());

a = print("hello msg!");  // a = udefined
console.log(a);



function sum(a,b){
    //console.log(`a = ${a}   b = ${b}`)
    return a + b;
}

function div(a,b){
    //console.log(`a = ${a}   b = ${b}`)
    return a / b;
}

// function declaration
function print(a){
    console.log(a);
}

// ---------------------------------------------
let sumFunction = sum;
let sumResult = sum(10,20);  
console.log(typeof(sum));
console.log("--------------------------------------------")  
console.log("sum = ", sum);
console.log("sum(2,3) =", sum(2,3));
console.log("sumFunction(10,8) =", sumFunction(10,8));
console.log("------------------ operation ---------------");
operation(6,2, sum);
operation(6,2, div);


// function expression
let multiply = function(a,b){
    return a*b;
};

// arrow functin
let mul = (a,b) => a*b;
console.log(mul, typeof(mul));




operation(6,9, multiply);


function operation(a, b, func){
    console.log(`начинаем подчсет a= ${a}  b=${b}`)
    console.log(`результат = ${func(a,b)}`);
}