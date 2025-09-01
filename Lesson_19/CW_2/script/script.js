/*
) Создай функцию-конструктор объектов Account(iban,owner, balance), которая возвращает объект с:

номер счета (iban)
именем владельца (owner)
балансом (balance)
методами:
deposit(amount) — пополнение счёта
withdraw(amount) — снятие денег (если хватает баланса)
getBalance() — вывод текущего баланса
Создайте несколько объектов счетов. Создайте массив из счетов. Выведите информацию о всех счетах в консоль

b) напишите функцию, transfer, которая получает два счета, и выполняет перевод между счетами вызывая методы deposit и withdraw соответственно.

с) (чуть сложнее) В качестве результата функции transfer, в случае успешной операции, должен cформироваться объект:

account1 (счет списания),
account2 (счет зачисления),
amount (сумма)
transactionInfo() (функция, которая выводит информацию о транзакции)
Если транзакция прошла неуспешно, объект должен содержать еще и поле error c информацией об ошибке. Естественно, transactionInfo() должна в этом случае выводить информацию о неуспешной транзакции. В случае, если транзакция успешна, поля error не должно быть. 
*/
console.log("-----Создание объектов товаров-----");
function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
        if (amount <= 0) {
            return false;
        }
        else {
            this.balance += amount;
            return true;
        }
    };
    this.windraw = function (amount) {
        if (amount > this.balance || amount <= 0) {
            return false;
        }
        else {
            this.balance -= amount;
            return true;
        }
    };
    this.getBalance = function () {
        return this.balance 
    }
}

const jackAccount = new Account("DE12345", "Jack", 100000);
console.log(jackAccount);
console.log("deposit +10000", jackAccount.deposit(10000));
console.log(jackAccount.getBalance());
console.log("withdraw -1500", jackAccount.windraw(1500));
console.log(jackAccount.getBalance());
console.log("--------перевод между счетами--------");
const annAccount = new Account("DE54321", "Ann", 0);

const resTransaction = console.log(transfer(jackAccount, annAccount, 1000));
console.log(annAccount);


// создаем функцию транзакции

function transfer(acc1, acc2, amount) {
    if (acc1.windraw(amount)) {
        acc2.deposit(amount);
        return new Transaction(acc1, acc2, amount);
    } else {
        return new Transaction(acc1, acc2, amount, "Недостаточно средств на счете списания");
    }
};

//-----Создание конструктора-----

function Transaction(acc1, acc2, amount, error) {
    this.account1 = acc1;
    this.account2 = acc2;
    this.amount = amount;
    if (error !== undefined) {
        this.error = error;
    }
    this.transactionInfo = function () {
        const iban1 = this.account1.iban || "счет не найден";
        const iban2 = this.account2.iban || "счет не найден";
        const msg = (`error` in this) ? `- error: ${this.error}` : '';
        return `Перевод со счета ${iban1} на счет ${iban2} суммы ${this.amount} ${msg}`;
    }
}





















// function Account(iban, owner, balance) {
//     this.iban = iban;
//     this.owner = owner;
//     this.balance = balance;
//     this.deposit = function (amount) {
//         this.balance += amount;
//         console.log(`Счет ${this.iban} пополнен на ${amount}. Текущий баланс: ${this.balance}`);
//     }
//     this.windraw = function (amount){
//         if (amount > this.balance) {
//             console.log(`Недостаточно средств на счете ${this.iban}. Текущий баланс: ${this.balance}`);
//             return false;
//         }
//         else {
//             this.balance -= amount;
//             console.log(`Со счета ${this.iban} снято ${amount}. Текущий баланс: ${this.balance}`);
//             return true;
//         }
//     }
// };
// console.log("-----Создание счетов через конструктор-----");
// const account1 = new Account("UA123 ", "Ivan", 500);
// const account2 = new Account("UA456 ", "Petr", 300);
// console.log(account1);
// console.log(account2);
// console.log("-----Массив счетов-----");
// const accounts = [account1, account2, new Account("UA789 ", "Sidor", 1000)];
// console.log(accounts);
// Account.prototype.getBalance = function () {
//     return this.balance;
// }
// accounts.forEach((account, index) => {
//     console.log(`Счет ${index + 1}: IBAN: ${account.iban}, Владелец: ${account.owner}, Баланс: ${account.getBalance()}`);
// });
// console.log("-----Перевод между счетами-----");

// function transfer(accountFrom, accountTo, amount) {
//     let transaction = {
//         account1: accountFrom.iban,
//         account2: accountTo.iban,
//         amount: amount,
//         error: null,
//         transactionInfo: function () {
//             if (this.error) {
//                 console.log(`Транзакция неуспешна: ${this.error}`);
//             } else {
//                 console.log(`Транзакция успешна: со счета ${this.account1} на счет ${this.account2} переведено ${this.amount}`);
//             }
//         }
//     };
//     if (!accountFrom.windraw(amount)) {
//         transaction.error = "Недостаточно средств на счете списания";
//     } else {
//         accountTo.deposit(amount);
//     }
//     return transaction;
// }
// transfer(new Account("UA123", "Ivan", 500), new Account("UA456", "Petr", 300), 600).transactionInfo();
// transfer(new Account("UA123", "Ivan", 500), new Account("UA456", "Petr", 300), 200).transactionInfo();




































// function Account(iban, owner, balance) {
//     this.iban = iban;
//     this.owner = owner;
//     this.balance = balance;
//     this.deposit = function (amount) {
//         this.balance += amount;
//         console.log(`Счет ${this.iban} пополнен на ${amount}. Текущий баланс: ${this.balance}`);
//     };
//     this.withdraw = function (amount) {
//         if (amount > this.balance) {
//             console.log(`Недостаточно средств на счете ${this.iban}. Текущий баланс: ${this.balance}`);
//             return false;
//         } else {
//             this.balance -= amount;
//             console.log(`Со счета ${this.iban} снято ${amount}. Текущий баланс: ${this.balance}`);
//             return true;
//         }
//     };
//     this.getBalance = function () {
//         return this.balance;
//     };
// }
// function transfer(accountFrom, accountTo, amount) {
//     let transaction = {
//         account1: accountFrom.iban,
//         account2: accountTo.iban,
//         amount: amount,
//         error: null,
//         transactionInfo: function () {
//             if (this.error) {
//                 console.log(`Транзакция неуспешна: ${this.error}`);
//             } else {
//                 console.log(`Транзакция успешна: со счета ${this.account1} на счет ${this.account2} переведено ${this.amount}`);
//             }
//         }
//     };
//     if (!accountFrom.withdraw(amount)) {
//         transaction.error = "Недостаточно средств на счете списания";
//     } else {
//         accountTo.deposit(amount);
//     }
//     return transaction;
// }

// transfer(new Account("UA123", "Ivan", 500), new Account("UA456", "Petr", 300), 600).transactionInfo();
// transfer(new Account("UA123", "Ivan", 500), new Account("UA456", "Petr", 300), 200).transactionInfo();
// console.log("-----Массив счетов-----");
// let accounts = [new Account("UA123", "Ivan", 500), new Account("UA456", "Petr", 300), new Account("UA789", "Sidor", 1000)];
// accounts.forEach((account, index) => {
//     console.log(`Счет ${index + 1}: IBAN: ${account.iban}, Владелец: ${account.owner}, Баланс: ${account.getBalance()}`);
// }); 
