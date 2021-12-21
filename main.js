

function checkSpam (str = prompt(`Введите сообщение!`)) {
    console.log(str);
    
    temp = str.toLowerCase();
   
    console.log(temp);

    if(temp.indexOf('viagra') ===  -1 && temp.indexOf('xxx') === -1){
        return false;
    }else{
        return true;
    }
};

console.log(checkSpam());

/*
let str = `deshowayz Viagra`;
let temps = str.toLowerCase();
let temp = temps.indexOf(`viagra`);
console.log(temp); 
if(temp === -1){
    console.log( false );
}else{
    console.log( true );
}*/
  