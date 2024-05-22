function displayPage(startIndex, poleProduktu, parent) {
    let parentElement = document.querySelector(parent);
    let endIndex = startIndex + 3;
    let template = document.getElementById("template").innerHTML;

    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];

        let navrh = template
            .replace("{image}", produkt.image)
            .replace("{name}", produkt.name)
            .replace("{price}", produkt.price)
            .replace("{description}", produkt.description)
            .replace("{buy}", produkt.buy)
            .replace("{detail}", produkt.detail);

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

        let navrh = template
            .replace("{image}", produkt.image)
            .replace("{name}", produkt.name)
            .replace("{price}", produkt.price)
            .replace("{description}", produkt.description)
            .replace("{buy}", produkt.buy)
            .replace("{detail}", produkt.detail)
            .replace("{slozeni}", produkt.slozeni)
            .replace("{sl1}", produkt.sl1)
            .replace("{sl2}", produkt.sl2)
            .replace("{sl3}", produkt.sl3)
            .replace("{sl4}", produkt.sl4)
            .replace("{sl5}", produkt.sl5)
            .replace("{sl6}", produkt.sl6)
            .replace("{sl7}", produkt.sl7);


        parentElement.insertAdjacentHTML("beforeend", navrh)
    }
}

