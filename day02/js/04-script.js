function ustAl() {
    const tabanEl = document.querySelector("#taban").value;
    const ustEl = document.querySelector("#ust").value;

    const sonuc = Number(tabanEl ** ustEl);
    let sonucEl = document.querySelector(".sonuc");
    sonucEl.classList.add("ekle");
    sonucEl.innerHTML = `<b> ${tabanEl} <sup> ${ustEl} </sup> = ${sonuc} </b>`;
}