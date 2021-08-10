/* let NameJs = prompt(`Какое «официальное» название JavaScript?`);

if (NameJs == "ECMAScript") {
    console.log(`Верно!`);
}else{
    console.log(`Не Верно!`);
}
(NameJs == "ECMAScript") ? console.log(`Верно!`) : console.log(`Не Верно!`); 


let variableJs = +prompt(`Введите число`);
if (variableJs > 0) {
    console.log(1);
} else if(variableJs < 0){
    console.log(-1);
}else{
    console.log(0);
}

*/
let variableJs = +prompt(`Введите число`);
(variableJs > 0) ? console.log(1) : (variableJs < 0) ? console.log(-1) : console.log(0);
