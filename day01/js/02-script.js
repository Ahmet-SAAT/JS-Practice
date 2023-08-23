let uzunKenar = prompt("lutfen uzun kenari giriniz");
let kisaKenar = prompt("lutfen kisa kenari giriniz");

let alan = Number(kisaKenar * uzunKenar);
window.alert(`Dikdortgenin alani ${alan}`);


let piNumber = 3.14;
console.log(typeof piNumber);

let x = null;
let y = undefined;
let z = "";
console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z));


let name1 = "Ali";
let name2 = "Oya";
let name3 = "Can";
let name4 = null;
let name5 = "";
let name6 = undefined;
// && false arar yoksa son true
// || true arar yoksa son false

console.log(name1 && name2 && name3); //Can

console.log(name1 && name2 && name3 && name1); //Ali

console.log(name4 || name5 || name2 || name1); //Oya

console.log(name4 || name5 || false || name6); //undefined

//== deger kontrolu
//=== deger+type kontrolu

let num1 = 40;
let num2 = "30";

console.log(num1 == "40"); //true
console.log(num1 === "40"); //false

console.log(num2 !== 30); //true evet esit degildir

console.log(num1 + name2 > 10) //true
console.log(num1 > num2 + 10) //false


const sayi = 258;
let birler = Math.floor(sayi % 10);
let onlar = Math.floor((sayi / 10) % 10);
let yuzler = Math.floor(sayi / 100);
let sonuc = birler + onlar + yuzler;

console.log(`${sayi} 'sinin basamaklari toplami = ${sonuc}`);