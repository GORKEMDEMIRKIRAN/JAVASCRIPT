
// DİZİLER

let product1="iphone 11";
let product2="iphone 12";
let product3="iphone 13";


let products=["iphone 12","iphone 13","iphone 14"];
let prices=[10000,12000,15000];
let colors=["gold","black","white"];


console.log(products[0]);
console.log(products[1]);
console.log(products[2]);


let course_name= "Komple web geliştirme eğitimi";
console.log(course_name[5]);
console.log(course_name.split(" ")[2]);


let product1_info=["iphone 12",10000,"gold"];
let product2_info=["iphone 13",12000,"white"];
let product3_info=["iphone 14",15000,"black"];


let wate=[];
wate[0]="iphone 12";
wate[1]=12000;
wate[2]="black";

console.log(wate);



let wate2=[
    "iphone 13 pro",
    20000,
    ["black","white","blue",[]]
];

console.log(wate2[2][1]);
console.log(typeof wate2[1]);


console.log(`${products[0]}-${prices[0]}-${colors[0]}`);
console.log(`${products[1]}-${prices[1]}-${colors[1]}`);
console.log(`${products[2]}-${prices[2]}-${colors[2]}`);






// ARRAY MOTHODS (Dizi metotları)

let students=["cınar","vuran","strom"];

distance1=students.length;

// array to string
distance2=students.toString();
distance3=students.join(" ");

// element delete
list1=students.pop();   // son eleman silinir
list2=students.shift(); // ilk eleman silinir

// element add
list3=students.push("sena");  // dizinin sonuna eleman eklenir.
list4=students.unshift("sena"); //dizinin başına eklenir.


let marks1=["nazda","toyota"];
let marks2=["opel","renault"];
let marks3=["mercedes"];


answer1=marks1.concat(marks2,marks3);
answer2=marks2.splice(0,1,"bmw","audi");
answer3=marks3.splice(0,1);


let list=[2,5,8,34,23,67,445,98,64,89,66,32,12,1,6];
answer4=list.indexOf(445);
answer5=list.sort();
answer6=list.reverse();

console.log(answer4);
console.log(answer5);
console.log(answer6);


