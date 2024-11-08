
// BU KISIMDA FONKSİYONLARI GÖRECEĞİZ.

function start(msg){
    console.log(msg);
}
start("hello");




function old_calculate(year){
    return new Date().getFullYear()-year;
}

let one=old_calculate(2010);
let two=old_calculate(2005);

console.log(one,two);






function emekliliğekaçyılkaldı(year,name){
    let old=old_calculate(year);
    let kalan=65-old;
    if(kalan>65){
        console.log('${name},emekli olmanıza ${kalan} yıl kaldı.');
    }
    else{
        console.log("zaten emekli olduğunuz.");
    }
}

emekliliğekaçyılkaldı(1980,"aime");