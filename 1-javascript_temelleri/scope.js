
// Fonksiyonlar kendi scope alanlarını oluştururlar.
// block içerisinde yeni bir scope oluşmaz. (let,const)


var name="armen";  //global scope

function write(){
    var name="ares";
    var old=45;
    console.log("function scope: ",name,old);
}

if(true){
    var name="zodiac";
    console.log(name);
}

console.log(name);
write();

