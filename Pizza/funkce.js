// --------------- Zobrazuje Menu ---------------

function displayJidlo(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 3;
    let template = document.getElementById("template-jidlo").innerHTML;

    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        let navrh = template.template(produkt);

        navrh = navrh.replace('id="uniqueID"', `id="${produkt.id}"`);
        navrh = navrh.replace('id="uniqueIdDetail"', `id="${produkt.id}"`);
        
        parentElement.insertAdjacentHTML("beforeend", navrh);
    }
}

// --------------- Zobrazuje Detail ---------------

function displayDetail(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 4;
    let template = document.getElementById("template-detail").innerHTML;

    for (let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        let navrh = template.template(produkt);

        navrh = navrh.replace('id="zoom"', `id="zoom-${produkt.id}"`);

        parentElement.insertAdjacentHTML("beforeend", navrh);
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

        navrh = navrh.replace('id="soupis"', `id="${produkt.id}"`);

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

// --------------- Detail ---------------

function Detail(id) {
    let x = document.querySelector(`#detail-${id}`);
    let smazat = document.querySelectorAll(".detail");
    
    for (let i = 1; i < smazat.length; i++) {
        let element = smazat[i];
        element.classList.add("hidden")
        element.classList.remove("zoomShow");
    }
    
    if (x) {
        if (x.classList.contains("zoomShow")) {
            x.classList.remove("zoomShow");
        } else {
            x.classList.add("zoomShow");
        }
    }
}

// -------    Hide    --------

function showSection(section) {
    section.classList.remove("hidden");
}

function hideSection(section) {
    section.classList.add("hidden");
}

function ZobrazKosik() {
    kosikx.classList.remove("hidden");

}

function skryjKosik() {
    kosikx.classList.add("hidden");

}

function skryjDetail1() {
    detail1.classList.remove("zoomShow");

}
function skryjDetail2() {
    detail2.classList.remove("zoomShow");

}
function skryjDetail3() {
    detail3.classList.remove("zoomShow");

}
function skryjDetail6() {
    detail6.classList.remove("zoomShow");

}
function skryjVyber() {
    vyber.classList.add("hidden");

}
function zobrazVyber() {
    vyber.classList.remove("hidden");

}
function zobrazTop() {
    topx.classList.remove("hidden");

}
function skryjTop() {
    topx.classList.add("hidden");

}

// --------------- Košík ---------------



function pridatDoKosiku(id) {
    console.log(id);

        if (!idVKosiku.includes(id)) {
            pocetVKosiku++;
            idVKosiku.push(id);
            document.querySelector('.navKos').innerText = pocetVKosiku;
            span.classList.remove("hidden");
            alert("Košík byl aktualizován!!!");
        } else {
            alert("Tuto položku již máte v košíku!!!");
        }
    }

function pridavejKosik(id) {
    let x = document.querySelector(`#kosik-${id}`);    
    if (x) {
            x.classList.remove("hidden");
        }
}

function odstranPolozku(id) {
    let x = document.querySelector(`#kosik-${id}`);

    if (idVKosiku.includes(id), x) {
        pocetVKosiku--;
        document.querySelector('.navKos').innerText = pocetVKosiku;
        idVKosiku.splice(idVKosiku.indexOf(id), 1); 
        alert("Položka byla odebrána z košíku!!!");
        x.classList.add("hidden");
        if (pocetVKosiku === 0) {
            span.classList.add("hidden");
        }
    }
}


function pridejPolozku(id) {
    let cislo = document.querySelector(`#kosik-${id} .cislo`);
    let cena = document.querySelector(`#kosik-${id} .cenax`);
    let mnozstvi = cena.getAttribute("data-cena");
    let aktualni = cislo.innerText;
    
    if (aktualni < 10) {
    aktualni++;
    cislo.innerText = aktualni;
    cena.innerText = mnozstvi * aktualni + ' Kč';
    }
}

function uberPolozku(id) {
    let cislo = document.querySelector(`#kosik-${id} .cislo`);
    let cena = document.querySelector(`#kosik-${id} .cenax`);
    let mnozstvi = cena.getAttribute("data-cena");
    let aktualni = cislo.innerText;

    if (aktualni > 1) {
        aktualni--;
        cislo.innerText = aktualni;
        cena.innerText = mnozstvi * aktualni + ' Kč';
    }
}

function objednavka() {
    return Math.floor(Math.random() * 99) + 1;
  }


  // --------------- List ---------------
  function cenaCelkem() {
    let cenaCelkem = 0;


    for (let i = 0; i < idVKosiku.length; i++) {
        let id = idVKosiku[i];
        let polozka = kosik.find(item => item.id === cena);
        cenaCelkem += polozka.cena * polozka.cislo;
    }


    let celkem = document.getElementById("celkem");
    celkem.textContent = cenaCelkem;
}