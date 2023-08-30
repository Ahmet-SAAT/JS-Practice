const dizi = [-5, 6, 3, -5, -7, 4, 12, -58, 72];

let toplam=0;
let adet=0;//pozitif ve cift sayi adet
for (let i = 0; i< dizi.length; i++) {
    if (dizi[i]>0 && dizi[i]%2==0) {
         toplam+=dizi[i]
        adet++
    }    
   

}
console.log(toplam)
console.log(adet)


toplam=0;
adet=0
for(let item of dizi){
    if(item>0 && item%2==0){
        toplam+=item
        adet++
    }
}
console.log(toplam)
console.log(adet)


toplam=0;
adet=0
for(let item of dizi){
    if(item>0 && item%2==0){
        toplam+=item
        adet++
    }
}
console.log(toplam)
console.log(adet)



for(let item of dizi){//ofda degerleri verir
   console.log(item)
}
for(let item in dizi){//inde indeksleri verir
   console.log(item)
}


const ulkeler = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  

  const baskentler = [
    "Ankara",
    "Berlin",
    "Paris",
    "Amsterdam",
    "Roma",
    "Madrid",
    "Lizbon",
  ];

  let newarr=[];
  for (let w in ulkeler) {//w indeks donecek 0 1 2 3 vs
    newarr[w]=ulkeler[w]+"-"+baskentler[w]
  }
  console.log(newarr)


let ulkeler2 = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  

 console.log(ulkeler2.sort())//siralamayi eng alfabesine gore yapiyor ama yukarida turkce karakter var

let yeniDizi=[];
ulkeler2=ulkeler2.sort((a,b)=> a.localeCompare(b)); //locale gore siraliyor
for (let item of ulkeler2) {
    item=item.substring(0,3).toLocaleUpperCase()
    yeniDizi.push(item)
}
console.log(yeniDizi)





/* const newSort = new Intl.Collator('tr', { sensitivity: 'base' });//boyle de olur
ulkeler2.sort(newSort.compare);
console.log(ulkeler2); */