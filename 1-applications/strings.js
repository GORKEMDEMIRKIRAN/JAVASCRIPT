

// STRING İÇİN UYGULAMA



let url="https://www.btk.com/";
let course_name="full stack developer training";
/*

1- url kaç akrakterlidir ?
2- kurs adı kaç kelimeden oluşmaktadır ?
3- url https ile mi çalışıyor?
4- kurs adı içerisinde "stack" kelimesi var mı?
5- url ve kurs adı değişkenlerini kullanarak aşağıdaki "string" bilgisi oluşturunuz.
   https://www.btk.com/full-stack-developer-training

*/


//==================================================================
// 1-ANSWER
let width=url.length;
console.log(width);
//==================================================================


//==================================================================
// 2-ANSWER
let words=course_name.split(" ").length;
console.log(words);
//==================================================================


//==================================================================
// 3-ANSWER
let vr=url.startsWith("https");
console.log(vr);

//==================================================================


//==================================================================
// 4-ANSWER

// 1.way
let one="stack";
let vari=course_name.split(" ");
let len=vari.length;
console.log(len);

for(var i=0;i<len;i++){
    if(vari[i]==one){
        console.log("yes");
    }
}
// 2.way
if(course_name.indexOf("stack")>-1){
    console.log("yes");
}
else{
    console.log("no");
}
//==================================================================


//==================================================================
// 5-ANSWER
let str;

course_name=course_name.replaceAll(" ","-");
console.log(course_name);
str=url+course_name;
console.log(str); 
//==================================================================
