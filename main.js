// "use strict"
/*
function Colculator() {
     this.read = function(){
          this.tempFirst = +prompt(`Введите А `); 
          this.tempLast = +prompt(`Введите В `); 
     };

     this.sum = function(){
               return this.tempFirst + this.tempLast;
     };

     this.mul = function(){
               return this.tempFirst * this.tempLast;
     };
};

let colculator = new Colculator();

colculator.read();

alert(`Sum =  ${colculator.sum()}`);
alert(`mul =  ${colculator.mul()}`);

*/


function Accumulaor(startingValue){
     this.startingValue = startingValue;
     this.value = +prompt(`Read number`);
     this.read = function(){
           
          return this.value + this.startingValue; 
     
     };
}


let accumulaor = new Accumulaor(7);

console.log(accumulaor.read());

