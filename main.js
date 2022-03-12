function camelize(str){
    let art = [], temp = str.split('-');
    for(let ti of temp){
        let compress = ti.slice(0,1).toUpperCase() + ti.slice(1,);
        art += compress;
    }
    
    console.log(art);
}

camelize('my-short-string-after-bbd');