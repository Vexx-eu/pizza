displayJidlo(0, pizzy, "#food");
displayJidlo(0, napoje, "#drinks");
displayDetail(0, detail, "#detail");
displayKosik(0, kosik, "#kosik");

let jidlo = document.getElementById("jidlo");
let napoj = document.getElementById("napoj");
let vse = document.getElementById("vse");
let food = document.getElementById("food");
let drinks = document.getElementById("drinks");




jidlo.addEventListener("click", function() {
    showSection(food);
    hideSection(drinks);
});

napoj.addEventListener("click", function() {
    showSection(drinks);
    hideSection(food);
});

vse.addEventListener("click", function() {
    showSection(food);
    showSection(drinks);
});








