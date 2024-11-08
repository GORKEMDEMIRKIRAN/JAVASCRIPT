
let total=0;

for(let i=1;i<=10;i++){
    total=total+i;
}

console.log(total);


let numbers=[1,7,4,99,56,34];
let tl=0;
for(let i=0;i<numbers.length;i++){
    tl=tl+numbers[i];
}

console.log(tl);


let tl1=0;
for(let i in numbers){
    tl1=tl1+numbers[i];
}
console.log(tl1);




for(let nbr of numbers){
    console.log(nbr);
}




let user={
    "name":"monaka sade",
    "username":"ms",
    "password":"1234",
    "email":"info@gmail.com"
}

for(let key in user){
    console.log(user[key]);
}


