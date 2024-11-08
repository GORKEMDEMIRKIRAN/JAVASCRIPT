
// DİZİLER İÇİN BİR ÇALIŞMA YAPACAĞIZ.


// 1-"elma,armut,muz,çilek" sahip bir dizi oluşturunuz.
// 2-Dizi kaç elemanlıdır ?
// 3-Dizinin ilk ve son elemanı nedir?
// 4-Elma dizinin ilk elemanımıdır?
// 5-Kiraz meyvesini listenin sonuna ekleyiniz?
// 6-Dizinin son 2 elemanını siliniz.
// 7-Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not
//    ortalamasını hesaplayınız.

/*
    öğrenci1: yiğit bilgi 2010 (70,60,80)
    öğrenci2: ada bilgi   2012 (80,80,90)
    öğrenci3: ahmet turan 2009 (60,60,70)
*/

students=[["yiğit bilgi",2010,[70,60,80]],
          ["ada bilgi",2012,[80,80,90]],
          ["ahmet turan",2009,[60,60,70]]];


let dt=new Date();
console.log(dt);

st_one_old=dt.getFullYear()-students[0][1];
st_two_old=dt.getFullYear()-students[1][1];
st_three_old=dt.getFullYear()-students[2][1];
st_one_average=(students[0][2][0]+
                students[0][2][1]+
                students[0][2][2]
)/3;
st_two_average=(students[1][2][0]+
                students[1][2][1]+
                students[1][2][2]
)/3;
st_three_average=(students[2][2][0]+
                students[2][2][1]+
                students[2][2][2]
)/3;

console.log("Birinci öğrencinin yaşı ve ortalaması: ",st_one_old,st_one_average);
console.log("İkinci öğrencinin yaşı ve ortalaması: ",st_two_old,st_two_average);
console.log("Üçüncü öğrencinin yaşı ve ortalaması: ",st_three_old,st_three_average);


let list;

list=["apple","pear","banana","strawberry"];
distance=list.length;
first=list[0];
end=list[distance-1];

console.log("listemiz: ",list);
console.log("liste uzunluğu: ",distance);
console.log("ilk eleman: ",first);
console.log("son eleman: ",end);


if(list[0]=="apple"){
    console.log("ilk elemandır.");
}
else{
    console.log("ilk eleman değildir.");
}

list.push("cherry");
console.log("yeni liste: ",list);


list.pop();
list.pop();
console.log("yeni liste: ",list);