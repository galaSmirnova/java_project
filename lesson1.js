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
    expenses:{},
    optionalExpenses:{},
    income: [],
    savings: true
}

function chooseExpensis() {
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
}
chooseExpensis();

/*let i = 0;
while (i < 2) { 
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== null
        && a !== "" && b !== "" && a.length < 50) {
        console.log("Верно");
        appData.expenses[a] = b;
    } else { 
        console.log("Не верно!");
        i--;
    }
    i++;
}*/

/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== null
        && a !== "" && b !== "" && a.length < 50) {
        console.log("Верно");
        appData.expenses[a] = b;
    } else {
        console.log("Не верно!");
        i--;
    }
    i++;
}
while (i < 2);*/
function detectDayBudget() { 
    appData.moneyPerDay = (appData.budget/ 30).toFixed(1);
    alert("Ежедневный бюджет " + appData.moneyPerDay);
}
detectDayBudget()

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Маленький уровень дохода");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) { 
        console.log("Средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень дохода");
    } else { 
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() { 
    
    if (appData.savings == true) {    
        let save = +prompt("Введите ваши накопления", ''),
        percent = +prompt("Процент по депозиту", '');
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        alert("Ваш доход в месяц составит: " + appData.monthIncome);
    }

}
checkSavings();

console.log(appData);
// Функция для определения необязательных расходов
function chooseOptExpenses() {
    
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


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

console.log(appData);
