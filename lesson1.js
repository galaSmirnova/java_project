'use strict';

let money, time;

function start() { 
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpensis: function () { 
    for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
                && a != "" && b != "" && a.length < 50) {
                console.log("Верно");
                appData.expenses[a] = b;
            } else {
                console.log("Не верно");
                i--;
            }
        }
    },
    detectDayBudget: function () { 
        appData.moneyPerDay = (appData.budget/ 30).toFixed(1);
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () { 
        if (appData.moneyPerDay < 100) {
            console.log("Маленький уровень дохода");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) { 
            console.log("Средний уровень дохода");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень дохода");
        } else { 
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () { 
        if (appData.savings == true) {    
                let save = +prompt("Введите ваши накопления", ''),
                percent = +prompt("Процент по депозиту", '');
                appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
                alert("Ваш доход в месяц составит: " + appData.monthIncome);
            }
    },
    chooseOptExpenses: function () { 
       for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    } 
    },
    chooseIncome: function () {         
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
            
            if ((typeof (items)) != "string" || items === "" || (typeof (items)) === null) {
                 console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else { 
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
            appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
        }
    }
}
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

/*function chooseOptExpenses() { 
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов?", '');
           
        if ((typeof (a)) === 'string' && (typeof (a)) != null 
            && a != "" && a.length < 50) {
            console.log("Верно");
            appData.optionalExpenses[i] = a;
        } else {
            console.log("Не верно");
            i--;
        }
    }
        
}

chooseOptExpenses();*/

// console.log(appData);
