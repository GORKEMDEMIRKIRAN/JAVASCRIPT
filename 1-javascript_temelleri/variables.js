

// JAVASCRIPT


// DEĞİŞKENLER(VARIABLES)
//***********************************************************
var salary_john=5000;
var salary_salan=6000;

var zam=0.35;

console.log(salary_john + (salary_john*zam)) // salary john
console.log(salary_salan + (salary_salan*zam)) // salary salan
//***********************************************************


// VARIABLE TYPES
//***********************************************************
// değişken tanımlarken "var","let" kullanabiliriz.
// Bunların farkını koşullarda öğreneceğiz.

var product_name="İPHONE 14";  // string
let product_price=14000;       // number

console.log(typeof product_name);
console.log(typeof product_price);

//***********************************************************
let number1="10";
let number2="20";

// bu kısımda string değerleri number değerlere dönüştürüldü.
console.log(Number(number1)+Number(number2));

//***********************************************************
let number3=30;
let number4=40;
// bu kısımda number string dönüştürerek birleştirildi.
console.log(number3.toString()+number4.toString());

//***********************************************************
let name="aron";
let surname="clode";
console.log(name+" "+surname);

//***********************************************************
let exam_note=50;
let success = (exam_note>60);
console.log(success);
console.log(typeof success);  //boolean

//***********************************************************
let year;
year="";
console.log(year);
console.log(typeof year);
//***********************************************************
