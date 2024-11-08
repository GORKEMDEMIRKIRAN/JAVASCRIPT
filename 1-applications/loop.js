

// DÖNGÜLER İÇİN UYGULAMA YAPALIM.

let numbers=[1,4,6,25,9,54,32,43,66,99,52,23,56,125];
let products=["iphone 12","samsung s22","iphone 13","samsung s23"];
let students=[
        {  "ad":"john",
           "soyad":"carter",
           "notlar":[70,80,90]},
        {  "ad":"clara",
           "soyad":"fiter",
           "notlar":[50,80,50]},
        {  "ad":"abby",
           "soyad":"contor",
           "notlar":[10,80,40]} ];


/*

1- Sayılar dizisindeki her bir elemanın karesini yazdırınız.
2- Sayılar listesindeki hangi sayılar 5'in katıdır.
3- Sayılar listesindeki çift sayıların toplamını bulunuz.
4- Ürünler listesindeki tüm ürümleri büyük harf ile yazdırınız.
5- Ürünler listesinde içinde samsung geçen kaç ürün vardır ?
6- Öğrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
7- Tüm öğrencilerin not ortalaması kaçtır ?

*/


// ANSWER-1

var value;
for(let element of numbers){
    value=element*element;
    console.log(value);
};

// ANSWER - 2
for(let nbr in numbers){
    if(numbers[nbr] %5==0){
       console.log(nbr + ".eleman 5'in katıdır.");
    }
}

// ANSWER - 3

var even_nbr=0;

for(let as in numbers){
    if(numbers[as] %2 ==0){
       even_nbr=even_nbr + numbers[as];
    }
}
console.log("Çift sayıların toplamı: ",even_nbr);


// ANSWER - 4

for(let elm of products){
    console.log(elm.toUpperCase());
}


// ANSWER - 5

let new_value;
let count=0;

for(let variable in products){
    new_value=products[variable].split(" ");
    for(let vr of new_value){
        if("samsung" == vr.toLowerCase()){
           count=count+1;
        }
    }
}
console.log(count + " tane ürün vardır.");



// ANSWER - 6

var one,two,three;
var average;
var state;
var total=0;

for(let data in students){
    one=students[data].notlar[0];
    two=students[data].notlar[1];
    three=students[data].notlar[2];
    average=(one*0.30)+(two*0.30)+(three*0.40);
    total=total+average;
    if(average > 50){
        state="başarılı";
    }
    else{
        state="başarısız";
    }
    console.log(students[data].ad +" "+ students[data].soyad + " not ortalaması: ",average,state);
}

// ANSWER - 7
var general_note;
general_note=total/3;
console.log("genel not ortalaması: ",general_note);





