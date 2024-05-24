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








