
// dict,json

let usersA={
    "ad":"dira",
    "soyad":"turan",
    "yaş":28,
    "adres":{
        "şehir":"istanbul",
        "ilçe":"sarıyer"
    },
    "hobiler":["sinema","spor","yürüyüş"]
}
let usersB={
    "ad":"buran",
    "soyad":"turan",
    "yaş":38,
    "adres":{
        "şehir":"kocaeli",
        "ilçe":"izmit"
    },
    "hobiler":["sinema","spor","yürüyüş"]
}



let answer1;
let answer2;
let answer3;
let answer4;

answer1=usersA.ad;
answer2=usersA.adres.şehir;
answer3=usersA.adres.ilçe;
answer4=usersA.hobiler[1];


let users=[
    usersA,
    usersB
];

let answer5=users[1].ad;
console.log(answer5);


let products=[
    {
        "ürün_adı":"samsung s22",
        "ürün fiyatı":13000
    },
    {
        "ürün_adı":"samsung s23",
        "ürün fiyatı":15000
    }
];

let answer6=products[0].ürün_adı;
console.log(answer6);


