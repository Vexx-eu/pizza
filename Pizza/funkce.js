// --------------- Zobrazuje Menu ---------------

function displayJidlo(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 3;
    let template = document.getElementById("template-jidlo").innerHTML;

    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        let navrh = template.template(produkt)

        parentElement.insertAdjacentHTML("beforeend", navrh)
    }
}

// --------------- Zobrazuje Detail ---------------

function displayDetail(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 4;
    let template = document.getElementById("template-detail").innerHTML;

    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        let navrh = template.template(produkt)

        parentElement.insertAdjacentHTML("beforeend", navrh)
    }
}

// --------------- Zobrazuje Košík ---------------

function displayKosik(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent + " .soupis");
    let endIndex = startIndex + 6;
    let template = document.getElementById("template-kosik").innerHTML;

    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        let navrh = template.template(produkt)

        parentElement.insertAdjacentHTML("beforeend", navrh)
    }
}


String.prototype.template = function (d) {
	return this.replace(/\{([^\}]+)\}/g, function (m, n) {
		var o = d, p = n.split("|")[0].split(".");
		for (var i = 0; i < p.length; i++) {
			o = typeof o[p[i]] === "function" ? o[p[i]]() : o[p[i]];
			if (typeof o === "undefined" || o === null) return n.indexOf("|") !== -1 ? n.split("|")[1] : m;
		}
		return o;
	});
};


// --------------- Košík (list se načítá jako poslední) ---------------

    let kosikSection = document.getElementById("kosik");
    let listArticle = kosikSection.querySelector("article.list");
    kosikSection.appendChild(listArticle);



// --------------- Tlačítka ---------------


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

function showSection(section) {
    section.classList.remove("hidden");
}

function hideSection(section) {
    section.classList.add("hidden");
}

// --------------- Plus / Minus ---------------
