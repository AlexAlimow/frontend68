let num1 = 2;
let num2 = 5;

// Проверка, что переменные являются числами
if (typeof num1 === "number" && typeof num2 === "number") {
    console.log("Обе переменные — числа");

    // Вычисляем через цикл
    let resultCycle = 1;
    for (let i = 0; i < num2; i++) {
        resultCycle *= num1;
    }

    // Вычисляем стандартным способом
    let resultStandard = num1 ** num2;

    // Выводим результаты
    console.log(`Результат через цикл: ${resultCycle}`);
    console.log(`Результат стандартный: ${resultStandard}`);

    // Сравниваем
    if (resultCycle === resultStandard) {
        console.log("Результаты совпадают");
    } else {
        console.log("Результаты отличаются");
    }

} else {
    console.log("Ошибка: переменные должны быть числами!");
}
