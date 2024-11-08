
// STRINGS İŞLEMLER
//***********************************************************
let name="gamdom";
let surname="crole";
let year=34;
let city="Kocaeli";

let message="My name is "+name+" and surname is "+surname+". I'm from "+city+" I'm "+year+" old.";
//Backtick
let message2=`My name is ${name} and surname is ${surname}. I'm from ${city}. I'm ${year} old.`;
//tennary operators
let pension=(65-year)? "No pension":"Pension";
console.log(message);
console.log(message2);
console.log(pension);
//***********************************************************




// STRINGS METODLARI
//***********************************************************


let course="This course is programming";
let space1;
let space2;
let space3;
let space4;
let space5;
let space6;
let space7;
let space8;
let space9;
let space10;
let space11;
let space12;
let space13;
let space14;
let space15;


space1=course.replace("This","is"); // Ters çevirme
space2=course.toLowerCase();
space3=course.toUpperCase();
space4=course.length;
space5=course[0,5];
space6=course[4];
space7=course.slice(-10,-5);
space8=course.slice(10);
space9=course.substring(0,6);
space10=course.substring(5);
space11=course.trim();
space12=course.trimEnd();
space13=course.trimStart();
space14=course.split(" ")[0];
space15=course.indexOf("Komple");


console.log(50*"=");

console.log(space1);
console.log(space2);
console.log(space3);
console.log(space4);
console.log(space5);
console.log(space6);
console.log(space7);
console.log(space8);
console.log(space9);
console.log(space10);
console.log(space11);
console.log(space12);
console.log(space13);
console.log(space14);
console.log(space15);


console.log(50*"=");




