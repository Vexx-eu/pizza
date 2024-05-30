// -----------   Show   -----------
displayJidlo(0, pizzy, "#food");
displayJidlo(0, napoje, "#drinks");
displayDetail(0, detail, "#detail");
displayKosik(0, kosik, "#kosik");
// -----------   Deklarace   -----------

let jidlo = document.getElementById("jidlo");
let napoj = document.getElementById("napoj");
let vse = document.getElementById("vse");
let food = document.getElementById("food");
let drinks = document.getElementById("drinks");

let tlacitkaKoupit = document.querySelectorAll('.buy');
let span = document.getElementById("span");

let navKos = document.getElementById("iconka");
let kosikx = document.getElementById("kosik"); 

let domu = document.getElementById("domu");
let menu = document.getElementById("menu");
let kontakt = document.getElementById("kontakt");

let vyber = document.getElementById("vyber");
let topx = document.getElementById("top");

let cislo = document.getElementById("objednavka");
    cislo.textContent = objednavka();

let cisloy = document.getElementById("objednavka2");
    cisloy.textContent = objednavka2();

let popup = document.getElementById("popup");
let zaplat = document.getElementById("zaplatit");    

let idVKosiku = []; 
let pocetVKosiku = 0; 

document.getElementById("zaplatit").addEventListener("click", zaplatit);



// -----------   Tlačítka   -----------

jidlo.addEventListener("click", function() {
    showSection(food);
    hideSection(drinks);
    skryjDetaily();
    jidlo.style.backgroundColor = "orange";
    napoj.style.backgroundColor = "white";
    vse.style.backgroundColor = "white";
});

napoj.addEventListener("click", function() {
    showSection(drinks);
    hideSection(food);
    skryjDetaily();
    napoj.style.backgroundColor = "orange";
    jidlo.style.backgroundColor = "white";
    vse.style.backgroundColor = "white";
});

vse.addEventListener("click", function() {
    showSection(food);
    showSection(drinks);
    skryjDetaily();
    vse.style.backgroundColor = "orange";
    jidlo.style.backgroundColor = "white";
    napoj.style.backgroundColor = "white";
});

// -------    NavKos    --------
 
navKos.addEventListener("click", function() {
    ZobrazKosik(kosikx);
    hideSection(food);
    hideSection(drinks);
    hideSection(jidlo);
    hideSection(napoj);
    hideSection(vse);
    skryjDetaily();
    skryjVyber(vyber);
    skryjTop(topx);
});

// -------    NAV    --------

domu.addEventListener("click", function() {
    skryjKosik(kosikx);
    showSection(food);
    showSection(drinks);
    showSection(jidlo);
    showSection(napoj);
    showSection(vse);
    skryjDetaily();
    zobrazVyber(vyber);
    zobrazTop(topx);
});

menu.addEventListener("click", function() {
    skryjKosik(kosikx);
    showSection(food);
    showSection(drinks);
    showSection(jidlo);
    showSection(napoj);
    showSection(vse);
    skryjDetaily();
    zobrazVyber(vyber);
    zobrazTop(topx);
});

kontakt.addEventListener("click", function() {
    skryjKosik(kosikx);
    showSection(food);
    showSection(drinks);
    showSection(jidlo);
    showSection(napoj);
    showSection(vse);
    skryjDetaily();
    zobrazVyber(vyber);
    zobrazTop(topx);
});

// -------    Zaplatit    --------

zaplat.addEventListener("click", function() {
    skryjKosik(kosikx);
    hideSection(food);
    hideSection(drinks);
    hideSection(jidlo);
    hideSection(napoj);
    hideSection(vse);
    skryjDetaily();
    skryjVyber(vyber);
    skryjTop(topx);
    skryjFooter(footer);
    skryjHeader(header);
    zaplatitHidden(zaplat);

});

/*
 let data = {
    jidlo: document.getElementById("jidlo"),
    napoj: document.getElementById("napoj"),
    vse: document.getElementById("vse"),
    food: document.getElementById("food"),
    drinks: document.getElementById("drinks"),
    navKos: document.getElementById("iconka"),
    kosikx: document.getElementById("kosik"),
    domu: document.getElementById("domu"),
    menu: document.getElementById("menu"),
    kontakt: document.getElementById("kontakt"),
    detail1: document.getElementById("detail-1"),
    detail2: document.getElementById("detail-2"),
    detail3: document.getElementById("detail-3"),
    detail6: document.getElementById("detail-6"),
    vyber: document.getElementById("vyber"),
    topx: document.getElementById("top"),
    header: document.getElementById("header"),
    footer: document.getElementById("footer"),
    span: document.getElementById("span"),
    popup: document.getElementById("popup"),
    zaplat: document.getElementById("zaplatit"),
    soupis: document.getElementById("soupis"),
    total: document.getElementById("total"),
    totalis: document.getElementById("totalis"),
    cislo: document.getElementById("objednavka"),
    cisloy: document.getElementById("objednavka2")};
*/ 