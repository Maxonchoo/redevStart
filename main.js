function Constr(firstName, lastName, age, city, prifession) {

     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
     this.city = city;
     this.prifession = prifession;

     let job = 'track driver';

     this.sayHello = function(){
          return `hello my name is ${this.firstName}, my favorite job ${job}`;
     };

}

let man = new Constr ("Максим", "Чижиков", 26, "Гомель", NaN);

console.table(man.sayHello());

let MyApp = {
    man : function (firstName, lastName, age, city, prifession){
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
          this.city = city;
          this.prifession = prifession;
    }
};

let goga = new MyApp.man('Гога', 'Тупуриа', '32', 'СПБ', 'Фитнес-Тренер');

console.log(goga);

console.log( goga instanceof MyApp.man);
console.log(goga.constructor);

console.log(man instanceof Constr); 
console.log(man.constructor);
