// --------------- Zobrazuje Menu ---------------

function displayJidlo(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 100;
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
    let endIndex = startIndex + 100;
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
    let endIndex = startIndex + 100;
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
function skryjHeader() {
    header.classList.add("hidden");

}
function skryjFooter() {
    footer.classList.add("hidden");

}

function zaplatitVisible() {
    zaplat.classList.remove("hidden");
}

function zaplatitHidden() {
    zaplat.classList.add("hidden");
}
// --------------- Košík ---------------



function pridatDoKosiku(id) {
    console.log(id);

    if (!idVKosiku.includes(id)) {
        pocetVKosiku++;
        idVKosiku.push(id);
        document.querySelector('.navKos').innerText = pocetVKosiku;
        span.classList.remove("hidden");
        pridavejKosik(id);
        zaplatitVisible();

    } else {
        alert("Tuto položku již máte v košíku!!!");
    }
}



function pridavejKosik(id) {
    let x = document.querySelector(`#kosik-${id}`);

    if (x) {
        x.classList.remove("hidden");
        let cislo = x.querySelector('.cislo');
        let cena = x.querySelector('.cenax');
        let mnozstvi = cena.getAttribute('data-cena');
        cislo.innerText = 1;
        cena.innerText = mnozstvi + ' Kč';
        cenaCelkem();
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
        cenaCelkem();
    }
}


function pridejPolozku(id) {
    let x = document.querySelector(`#kosik-${id}`);
    let cislo = x.querySelector('.cislo');
    let cena = x.querySelector('.cenax');
    let mnozstvi = cena.getAttribute('data-cena');
    let aktualni = parseInt(cislo.innerText, 10);

    if (aktualni < 10) {
        aktualni++;
        cislo.innerText = aktualni;
        cena.innerText = mnozstvi * aktualni + ' Kč';
        cenaCelkem();
    }
}

function uberPolozku(id) {
    let x = document.querySelector(`#kosik-${id}`);
    let cislo = x.querySelector('.cislo');
    let cena = x.querySelector('.cenax');
    let mnozstvi = cena.getAttribute('data-cena');
    let aktualni = parseInt(cislo.innerText, 10);

    if (aktualni > 1) {
        aktualni--;
        cislo.innerText = aktualni;
        cena.innerText = mnozstvi * aktualni + ' Kč';
        cenaCelkem();
    }
}

function objednavka() {
    return Math.floor(Math.random() * 99) + 1;

  }

  function objednavka2() {
    return document.getElementById("objednavka").textContent;
}


  // --------------- List ---------------
  function cenaCelkem() {
    let cenaCelkem = 0;

    let ceny = document.querySelectorAll('.cenax');

    ceny.forEach(function(zavreno) {
        if (!zavreno.closest('.hidden')) {
            let cena = parseFloat(zavreno.textContent);
            if (!isNaN(cena)) {
                cenaCelkem += cena;
            }
        }
    });

    let celkem = document.getElementById("celkem");
    celkem.textContent = cenaCelkem;

    let cenaKomplet = cenaCelkem + 70;
    let komplet = document.getElementById("komplet");
    komplet.textContent = cenaKomplet;
}

  // --------------- Dialogs ---------------
    
function openPopup(){ 
        popup.classList.add("open-popup");
}
    
function closePopup() {
        popup.classList.remove("open-popup");
}

  // --------------- Zaplatit ---------------

  function zaplatit() {
    let kosik = document.querySelectorAll('.soupis');

    kosik.forEach(function(item, index) {
        if (index !== 0) {
            item.classList.add("hidden");
        }
    });

    idVKosiku = [];
    pocetVKosiku = 0;

    let span = document.getElementById("span");
    span.classList.add("hidden");

}

function refresh() {
    location.reload();
}