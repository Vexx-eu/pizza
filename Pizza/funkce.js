function displayPage(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 3;
    let template = document.getElementById("template").innerHTML;

    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        let navrh = template.template(produkt)

        parentElement.insertAdjacentHTML("beforeend", navrh)
    }
}


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


String.prototype.template = function (d) {
	return this.replace(/\{([^\}]+)\}/g, function (m, n) {
		var o = d, p = n.split('|')[0].split('.');
		for (var i = 0; i < p.length; i++) {
			o = typeof o[p[i]] === "function" ? o[p[i]]() : o[p[i]];
			if (typeof o === "undefined" || o === null) return n.indexOf('|') !== -1 ? n.split('|')[1] : m;
		}
		return o;
	});
};
