/*Задание 1 вариант с While
let a = 0;
while (a <= 100) {
    console.log(a++);
}
*/ 
/* Задание 1 вариант с for
for (let a = 0; a <= 100; a++){
    console.log(a);
}
*/
/*Задание 2 вариант с while  
let a = 11;
while (a <= 33) {
    console.log(a++);
}
*/

/*Задание 2 вариант с for вариант реализации 1
for (let a = 11; a <= 33; a++){
    console.log(a);
}
*/

/* Задание 2 вариант с for вариант реализации 2
for (let a = 0; a <= 33; a++){
    if (a < 11) continue;
    console.log(a);
}
*/

/*Задание 3 вариант с While
let a = 0;
while (a <= 100) {
    a++;
    if(a % 2 == 0){
        console.log(a);
    }
}
*/

/*Задание 3 вариант с for
for(let a = 0; a <= 100; a++){
    if(a % 2 == 0){
        console.log(a);
    }
}
*/

/*Задание 4 вариант с while
let sum = 0,
    i = 0;
while (i <= 100) {
    console.log(sum += i);
    i++;
}
*/

/*Задание 4 Вариант с for
let sum = 0;
for (let i = 0; i <= 100; i++){
    console.log(sum += i);
}
*/

/* задача из youtube "фрилансер по жизни"
for (let num = 0; num < 2; num++){
    console.log(`Num: ${num}`);
    for (let size = 0; size < 3; size++) {
        if(num == 1) {
            break;
        }else{
            console.log(`Size: ${size}`);
        }
    }
    
}