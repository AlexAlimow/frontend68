const num1 = 7;
const num2 = 8;
if (typeof (num1) === "number" && typeof (num2) === "number") {
    console.log("Обе переменные являются числами");
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    console.log(`Степень (через цикл): ${num1}^${num2} =  ${result}`);
    const result2 = num1 ** num2;
    console.log(`степень (через **): ${num1}^${num2} = ${result2}`);
    console.log(result === result2 ? "результаты совпали" : "где то ошибка");
} else {
    console.log("Не верные параметры");
}


