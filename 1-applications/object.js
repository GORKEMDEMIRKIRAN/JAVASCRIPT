

// OBJECTS APPLICATION

/*
  1- Şipariş bilgilerini object içerisinde saklayınız.
  2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız.
  3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.



  sipariş id: 101
  şipariş tarihi : 31.12.2022
  ödeme şekli: kredi kartı
  kargo adresi: barbaros mh. çanakkkale
  satın alınan ürünler:
       ürün id:5
       ürün başlığı: ıphone 13 pro
       ürün url:https://www.apple.com/tr/
       ürün fiyatı: 22000

       ürün id:6
       ürün başlığı: ıphone 13 pro max
       ürün url:https://www.apple.com/tr
       ürün fiyatı:25000
  müşteri:
       müşteri id:12
  satıcı:
       firma id:34
       firma adı: Apple Türkiye
  
*/

/*
  sipariş id:102
  şipariş tarihi:30.12.2022
  ödeme şekli: kredi kartı
  kargo adresi: barbaros mh. Çanakkale
  satın alınan ürünler:
      
      ürün id:6
      ürün başlığı: ıphone 13 pro max
      ürün url: https://www.apple.com/tr/
      ürün fiyatı: 25000
  
  müşteri:
       müşteri id:12
  satıcı:
       firma id:34
       firma adı: Apple Türkiye

*/



// ANSWER - 1
// ==========================================================

let purchase1={
    "sipariş id":101,
    "sipariş tarihi":"31.12.2022",
    "ödeme şekli":"kredi kartı",
    "kargo adresi":{
        "mahalle":"barbaros",
        "şehir":"çanakkale"
    },
    "satın alınan ürünler":{
        "ürünler":{
            "ürün1":{
            "ürün id":5,
            "ürün başlığı":"iphone 13 pro",
            "ürün url":"https://www.apple.com/tr",
            "ürün fiyatı":22000
            },
            "ürün2":{
            "ürün id":6,
            "ürün başlığı":"iphone 13 pro max",
            "ürün url":"https://www.apple.com/tr",
            "ürün fiyatı":25000
            }
        }
    },
    "müşteri":{
        "müşteri id":12
    },
    "satıcı":{
        "firma id":34,
        "firma adı":"Apple Türkiye"
    }
}
    

let purchase2={
    "sipariş id":102,
    "sipariş tarihi":"30.12.2022",
    "ödeme şekli":"kredi kartı",
    "kargo adresi":{
        "mahalle":"barbaros",
        "şehir":"çanakkale"
    },
    "satın alınan ürünler":{
        "ürün1":{
            "ürün id":6,
            "ürün başlığı":"iphone 13 pro max",
            "ürün url":"https://www.apple.com/tr",
            "ürün fiyatı":25000
        }
    },
    "müşteri":{
        "müşteri id":12
    },
    "satıcı":{
        "firma id":34,
        "firma adı":"Apple Türkiye"
    }
}

// ==========================================================




// ANSWER - 2 
// ==========================================================

var kdv=0.20;

var first_product_price;
var second_product_price;
var first_kdv_price;
var second_kdv_price;

var first_order_price;

// ilk siparişin ürün ücretleri
first_product_price=purchase1["satın alınan ürünler"].ürünler.ürün1["ürün fiyatı"];
second_product_price=purchase1["satın alınan ürünler"].ürünler.ürün2["ürün fiyatı"];

// ilk siparişin kdv dahil ücretleri
first_kdv_price = first_product_price + (first_product_price * kdv);
second_kdv_price = second_product_price + (second_product_price * kdv);

// ilk siparişin toplam ücreti
first_order_price=first_kdv_price + second_kdv_price;

console.log("birinci siparişin tutarı(kdv dahil): ",first_order_price);



var third_product_price;
var third_kdv_price;
var second_order_price;
// ikinci siparişin ürün ücreti
third_product_price=purchase2["satın alınan ürünler"].ürün1["ürün fiyatı"];
// ikinci siarişin kdv dahil ücreti
third_kdv_price = third_product_price + (third_product_price * kdv);
// ikinci siparişin toplam ücreti
second_order_price = third_kdv_price;

console.log("ikinci siparişin tutarı(kdv dahil): ",second_order_price);

// ==========================================================




// ANSWER - 3
// ==========================================================

// Tüm siparişlerin toplam ücretini görelim.

var total_price;

total_price= first_order_price + second_order_price;
console.log("Tüm siparişlerin toplam fiyatları: ",total_price);

// ==========================================================




