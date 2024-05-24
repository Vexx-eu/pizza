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

// --------------- Menu ---------------

function showSection(section) {
    section.classList.remove("hidden");
}

function hideSection(section) {
    section.classList.add("hidden");
}

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

// --------------- Koupit ---------------

function pridatDoKosiku() {

    pocetVKosiku++;
    document.querySelector('.navKos').innerText = pocetVKosiku;
    span.classList.remove("hidden");
    alert("Košík byl aktualizován!!!");
}

