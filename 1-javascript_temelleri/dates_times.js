

// DATES AND TIMES

let now= new Date();  // Şimdiki tarih ve zaman

// Get Methods

ans1=now;
ans2=now.getDate();
ans3=now.getDay();
ans4=now.getFullYear();
ans5=now.getHours();
ans6=now.getTime();

// Set Methods
ans7=now.setFullYear(2025);
ans8=now.setMonth(7);
ans9=now.setDate(15);


console.log("========================");
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
console.log(ans5);
console.log(ans6);
console.log("========================");
console.log(ans7);
console.log(ans8);
console.log(ans9);
console.log("========================");


let old_year=new Date(1990,5,12);
let different=now.getFullYear() - old_year.getFullYear();
console.log(different);

let milisecond=now-old_year;
let second=milisecond/1000;
let minute=second/60;
let hour=minute/60;
let day=hour/24;

console.log("========================");
console.log(milisecond);
console.log(second);
console.log(minute);
console.log(hour);
console.log(day);
console.log("========================");







