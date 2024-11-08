
// DEĞİŞKENLER KONUSU İÇİN UYGULAMA
/*

1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

    student 1;

        name              : halo ryhen
        birth day         : 2014
        mathematic note   : 67,44,56

    student 2;

        name              : syra bunar
        birth day         : 2005
        mathematic note   : 60,50,20 

2- Öğrencilerin yaş bilgilerini değişkenlerde tutunuz.
3- Öğrencilerin ders ortalama notunu değişkenlerde saklayınız.
4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.

*/

//==================================================================
// 1-ANSWER

// Information the first student
var student1_name="halo ryhen";
var student1_birth_Day=2014;
var student1_note1=67;
var student1_note2=44;
var student1_note3=56;

// Information the second student
var student2_name="syra bunar";
var student2_birth_Day=2005;
var student2_note1=60;
var student2_note2=50;
var student2_note3=20;

//==================================================================

// 2-ANSWER

// Şuan ki yılı aldık.
let now_year=new Date().getFullYear();

var student1_year= now_year-Number(student1_birth_Day);
var student2_year=now_year-Number(student2_birth_Day);

console.log(student1_year);
console.log(student2_year);

//==================================================================
// 3-ASNWER

var average1 = (student1_note1+student1_note2+student1_note3)/3;
var average2 = (student2_note1+student2_note2+student2_note3)/3;

console.log("The average exam of the first student: ",average1);
console.log("The average exam of the second student: ",average2);
console.log("The average exam of the first student: ",parseInt(average1));
console.log("The average exam of the second student: ",parseInt(average2));

//==================================================================

// 4-ANSWER
let student1_state=(average1>50); //boolean (true,false)
let student2_state=(average2>50);

console.log(student1_state);
console.log(student2_state);

//==================================================================


