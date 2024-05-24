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

// -----------   Tlačítka   -----------

jidlo.addEventListener("click", function() {
    showSection(food);
    hideSection(drinks);
    jidlo.style.backgroundColor = "orange";
    napoj.style.backgroundColor = "white";
    vse.style.backgroundColor = "white";
});

napoj.addEventListener("click", function() {
    showSection(drinks);
    hideSection(food);
    napoj.style.backgroundColor = "orange";
    jidlo.style.backgroundColor = "white";
    vse.style.backgroundColor = "white";
});

vse.addEventListener("click", function() {
    showSection(food);
    showSection(drinks);
    vse.style.backgroundColor = "orange";
    jidlo.style.backgroundColor = "white";
    napoj.style.backgroundColor = "white";
});


// -------    Koupit    --------

/* tlacitkaKoupit.forEach(tlacitko => {
    tlacitko.addEventListener('click', pridatDoKosiku);
});
*/


// -------    NavKos    --------
 
navKos.addEventListener("click", function() {
    ZobrazKosik(kosikx);
    hideSection(food);
    hideSection(drinks);
    hideSection(jidlo);
    hideSection(napoj);
    hideSection(vse);
});

// -------    NAV    --------

domu.addEventListener("click", function() {
    skryjKosik(kosikx);
    showSection(food);
    showSection(drinks);
    showSection(jidlo);
    showSection(napoj);
    showSection(vse);
});





