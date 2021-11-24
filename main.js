//  const person = {
//      name : "Максим",
//      age : 25,
//      sayHello : 'Hello',
//      logInfo: function (){
//          console.log(this.name);
//      }   
//  };

//  person.logInfo();

let house = 'slytherin';

switch(house){
    case 'gryffindor': 
        console.log('bravery'); 
        break;
    case 'hufflepuff': 
         console.log('loyalty');
         break;
    case 'slytherin': 
         console.log('cunning');
         break;
    case 'ravenclaw': 
         console.log('intellect');
         break;
    defoult:
         console.log('not a valid house');
         break;
}