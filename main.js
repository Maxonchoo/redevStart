// function sumInput() {
//     const massTemp = [];


//     while(true){
//         let value = +prompt("Введите число");
        
//         if(massTemp === " " || value === null || !isFinite(value)) break;
       
//         massTemp.push(+value);
//     }

//     let sum = 0;
//     for (let number of massTemp){
//         sum += number;
//     }
//     return sum;
// }   

// console.log(sumInput());

/*
const user = { 
    name : "john",
    age : 26,
};  

let key = prompt("Что вы хотите узнать о пользователе?", "хер");

console.log(user[key]);

const admin = {
    name : "barth",
    age : 19,
};

function sayHi() {
    console.log(this.name);
};

user.fedora = sayHi;
admin.fedora = sayHi;

user.fedora();
admin.fedora();


let str = `Ослик Иа-Иа посмотрел на виадук`;
let target = `Иа`;

let post = -1;
while((post = str.indexOf(target, post +1 )) != -1){
    console.log(post);
};

*/
/*
function random() {
    return Math.floor(Math.random() * 100);
};

console.log( random());
*/
/*
for (let index = 0; index <= 65536; index++  ){
    console.log(String.fromCodePoint(index));
    //console.log(index);

    function random() {
        return Math.floor(Math.random() * index);
    };
    
    console.log( random());

}

console.log();
*/

function ucFirst(str) {
    if(str !== " "){
        let temp = (str[0].toUpperCase() + str.slice(1));
        return temp;
    }else{
        console.log( `введите что нибудь `);
        return str;
    }
};
console.log( ucFirst(" "));


