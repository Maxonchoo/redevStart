/*
function checkAge(age){
   return (age >= 18) ? true : confirm(`Родители разрешили?`);
}

console.log(checkAge(14));

function checkAge(age){
    return (age >= 18) || confirm(`Родители разрешили?`);
}
console.log(checkAge(22));


function min (a, b){
    if (a < b) {
        return a;
    }else if (a > b) {
        return b;
    }
}

console.log(min(-17, -11));

function pow (x, n){
    return x ** n;
}
console.log(pow(-3, 3));
*/

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );