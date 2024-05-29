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

let detail1 = document.getElementById("detail-1");
let detail2 = document.getElementById("detail-2");
let detail3 = document.getElementById("detail-3");
let detail6 = document.getElementById("detail-6");

let vyber = document.getElementById("vyber");
let topx = document.getElementById("top");
let header = document.getElementById("header");
let footer = document.getElementById("footer");

let cislo = document.getElementById("objednavka");
    cislo.textContent = objednavka();

let cisloy = document.getElementById("objednavka2");
    cisloy.textContent = objednavka2();

let popup = document.getElementById("popup");
let zaplat = document.getElementById("zaplatit");    
let soupis = document.getElementById("soupis");
let total = document.getElementById("total");
let totalis = document.getElementById("totalis");

let idVKosiku = []; 
let pocetVKosiku = 0; 

document.getElementById("zaplatit").addEventListener("click", zaplatit);
/*
 const elements = {
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
    cislo: document.getElementById("objednavka"),
    cisloy: document.getElementById("objednavka2")};

elements.cislo.textContent = objednavka();
elements.cisloy.textContent = objednavka2();

let idVKosiku = [];
let pocetVKosiku = 0;

document.getElementById("zaplatit").addEventListener("click", zaplatit);

elements.zaplat.addEventListener("click", () => zaplatit(elements.kosikx, elements.food, elements.drinks, elements.jidlo, elements.napoj, elements.vse, elements.detail1, elements.detail2, elements.detail3, elements.detail6, elements.vyber, elements.topx, elements.zaplat));

*/

// -----------   Tlačítka   -----------

jidlo.addEventListener("click", function() {
    showSection(food);
    hideSection(drinks);
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
    jidlo.style.backgroundColor = "orange";
    napoj.style.backgroundColor = "white";
    vse.style.backgroundColor = "white";
});

napoj.addEventListener("click", function() {
    showSection(drinks);
    hideSection(food);
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
    napoj.style.backgroundColor = "orange";
    jidlo.style.backgroundColor = "white";
    vse.style.backgroundColor = "white";
});

vse.addEventListener("click", function() {
    showSection(food);
    showSection(drinks);
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
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
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
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
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
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
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
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
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
    zobrazVyber(vyber);
    zobrazTop(topx);
});

// -------    Zaplatit    --------

zaplat.addEventListener("click", function() {
    skryjKosik(kosikx);
    skryjTop(topx);
    skryjFooter(footer);
    skryjHeader(header);
    skryjDetail1(detail1);
    skryjDetail2(detail2);
    skryjDetail3(detail3);
    skryjDetail6(detail6);
});



// hideSection(food, drinks, jidlo, napoj, vse);
