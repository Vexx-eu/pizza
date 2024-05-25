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

let pocetVKosiku = 0;
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
});





