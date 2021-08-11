/*let money = +prompt(`Введите сумму которую хотите снять: 5, 10, 50, 100, 500 `);
switch (money) {
    case 5: console.log(`Вывести 5 евро`);
        break;
    case 10: console.log(`Вывести 10 евро`);
        break;
    case 50: console.log(`Вывести 50 евро`);
        break;
    case 100: console.log(`Вывести 100 евро`);
        break;
    case 500: console.log(`Вывести 500 евро`);
        break;
    default:   
        console.log(`Операция не ваозможна!`);
        break;
}


let browser = prompt('Каким браузером ты пользуешься ?');
if(browser == 'Edge'){
    console.log("You've got the Edge!");
}else if(browser == 'Chrome' || browser == 'Firefox' 
            || browser == 'Safari' || browser == 'Opera' ){
    console.log('Okay we support these browsers too');
}else{
    console.log( 'We hope that this page looks ok!' );
}

let number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0: console.log('Вы ввели число 0');
        break;
    case 1: console.log('Вы ввели число 1');
        break;
    case 2:
    case 3: console.log('Вы ввели число 2, а может и 3');
        break;
    default: console.log(`Попробуйте еще раз!`);
        break;
}

*/

let num = +prompt(`Введите значение от 1 до 4`),
    result = '';

switch (num) {
    case 1:
        console.log( result = 'Зима' );
        break;
    case 2:
        console.log( result = 'Весна' );
        break;
    case 3:
        console.log( result = 'Лето' );
        break;
    case 4:
        console.log( result = 'Осень' );
        break;
    default: console.log(`Вы ввели неправильное значение! Введите от 1 до 4 включительно!`);
        break;
}

