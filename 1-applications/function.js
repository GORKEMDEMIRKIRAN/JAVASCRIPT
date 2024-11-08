

// FUNCTION APPLLICATION

/*
1- Kendisine gönderilen kelimeyi belirtilen sayıda ekrana yazdırınız.
2- dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
3- Yazı,tura uygulamasını fonksiyon kullanarak yapınız.
4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
*/


// ANSWER -1 
// ========================================================================
function counter_char(string,number){
    for(let i=0; i<number; i=i+1){
        console.log(string);
    }
}
counter_char("gundom",5);
// ========================================================================





// ANSWER -2
// ========================================================================
function calculator(short_side,long_side){
    let area=short_side*long_side;
    let environment=(short_side*2)+(long_side*2);
    console.log("Çevresi: ",environment +" alanı: ",area);
}
calculator(5,12);
// ========================================================================





// ANSWER -3
// ========================================================================
function star(){
    // yazı veya tura
    // 0-1 arasında sayı üretir.
    let cn=Math.floor(Math.random()*2);
    if(cn==0){
        console.log("Yazı");
    }
    else{
        console.log("Tura");
    }
}
star();
// ========================================================================




// ANSWER -4 
// ========================================================================
function counter(number){
    let list=[];
    for(let i=0;i<=number;i++){
        if(number%i==0){
            list.push(i);
        }
    }
    console.log(list);
}
counter(125);
// ========================================================================





// ANSWER -5 
// ========================================================================
function total(){
    let data=0;
    for(let i=0;i<arguments.length;i++){
        data=data+arguments[i];
    }
    return data;
}
console.log(total(4,5));
console.log(total(4,5,6));
console.log(total(3,2,7,9));
// ========================================================================