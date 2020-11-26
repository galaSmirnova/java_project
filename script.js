let  money = "Ваш бюджет на месяц?";
let time = "Введите дату в формате YYYY-MM-DD";


let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income: [],
    savings: false
}
 
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let answer2 = prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let answer4 = prompt("Во сколько обойдется?");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);