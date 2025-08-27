/*
Пользователь вводит целое число (воспользуйтесь prompt). Если введено 
что то другое, программа должна выдавать ссобщение об ошибке.
Ваша задача написать код  который создает массив из разрядов этого числа.   
4567 -> [4,5,6,7]    

Подмказка: возможно, для решения задачи вам понадобятся функции класса 
Math (это почти как в Java) и методы `Number.isInteger()` 
и `Number.isFinite()`


*/

let input = prompt("Введите целое число");
if (input === null) {
    console.log("Пользователь отменил ввод")
} else {
    console.log(getDigit(+input))

}

function getDigit(num) {
    if (num == null || !Number.isInteger(num) || !Number.isFinite(num)) {
        return "Ошибка ввода"
    }
    let res = [];
    if (num === 0){
        res = [0];
    } else{
        while ( num >0) {
            let digit = num % 10;
            res.unshift(digit);
            num = parseInt(num / 10);
        }
    }
    return res;
}