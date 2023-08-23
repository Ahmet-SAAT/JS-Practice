function hesapla() {
    let yas = document.querySelector("#yas");
    let fiyat = document.querySelector("#fiyat");

    let indirimliFiyat = 0;
       indirimliFiyat = yas>=65 ? fiyat*0.5 : fiyat*0.9; 
   /*  yas>=65 && (indirimliFiyat = fiyat*0.5);
    yas<65 && (indirimliFiyat = fiyat*0.9); */

    document.querySelector(
        "#msg"
    ).innerHTML = `urunun indirimli fiyati: ${indirimliFiyat}`;
}