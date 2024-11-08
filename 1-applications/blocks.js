

// KOŞULLU BLOKLAR İÇİN UYGULAMA

/*
 1-Bir sayının 10-50 arasında olup olamadığını kontrol ediniz.
 2-Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
 3- x,y,z sayılarının büyüklük karşılaştırılmasını yapınız.
 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
    4.1- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    4.2- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    4.3- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.
*/

//==================================================================
// 1-ANSWER

var number=45;

if(number>10 && number<50){
    console.log("Sayı 10-50 arasındadır.");
}else{
    console.log("Sayı 10-50 arasında değildir.");
}
//==================================================================


//==================================================================
// 2-ANSWER
var variable=65;

if(variable>0){
    if(variable%2==0){
        console.log("This number is double and positive.");
    }
    else{
        console.log("This number is single and positive.")
    }
}
else{
    console.log("This number is negative.")
}
//==================================================================


//==================================================================
// 3-ANSWER
var x=60,y=14,z=54;

if(x>y && x>z){
    console.log("X birinci sayıdır.")
    if(y>z){
        console.log("Y ikinci sayıdır.");
        console.log("Z üçüncü sayıdır.");
    }
    else{
        console.log("Z ikinci sayıdır.");
        console.log("Y üçüncü sayıdır.");
    }
}
else if(y>x && y>z){
    console.log("Y birinci sayıdır.")
    if(x>z){
        console.log("X ikinci sayıdır.");
        console.log("Z üçüncü sayıdır.");
    }
    else{
        console.log("Z ikinci sayıdır.");
        console.log("X üçüncü sayıdır.");
    }
}
else{
    console.log("Z birinci sayıdır.");
    if(x>y){
        console.log("X ikinci sayıdır.");
        console.log("Y üçüncü sayıdır.");
    }
    else{
        console.log("Y ikinci sayıdır.");
        console.log("Z üçüncü sayıdır.");
    }
}
//==================================================================



//==================================================================
// 4-ANSWER

var exam1 =10;
var exam2=10;
var final=70;

var average=(exam1*0.20)+(exam2*0.20)+(final*0.60);
console.log("The exam average of student: ",average);

if(average>50 && final>=50){

    console.log("Success");
}
else{
    if(final>=70){
        console.log("Success");
    }
    else{
        console.log("No success");
    }
}
//==================================================================






