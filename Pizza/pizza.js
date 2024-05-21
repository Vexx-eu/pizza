let pizzy = [
    {
        "name": "Margherita",
        "price": "149 Kč",
        "description": "Tato klasická pizza je vyrobena z rajčatového základu, mozzarelly a čerstvé bazalky.",
        "image": "img/margherita.png",
        "buy": "Koupit"
    },
    {
        "name": "Pepperoni",
        "price": "159 Kč",
        "description": "Pepperoni pizza je oblíbená volba s pikantními plátky salámu, rajčatovým základem a mozzarellou.",
        "image": "img/pepperoni.png",
        "buy": "Koupit"
    },
    {
        "name": "Hawai",
        "price": "169 Kč",
        "description": "Hawai pizza kombinuje sladkost ananasu se šunkou na rajčatovém základu s mozzarellou.",
        "image": "img/hawai.png",
        "buy": "Koupit"
    },
];


let napoje = [
    {
        "name": "Coca-cola",
        "price": "79 Kč",
        "image": "img/cola.png",
        "buy": "Koupit"
    },
    {
        "name": "Fanta",
        "price": "59 Kč",
        "image": "img/fanta.webp",
        "buy": "Koupit"
    },
    {
        "name": "Domácí Limonáda",
        "price": "69 Kč",
        "image": "img/limonada.jpg",
        "buy": "Koupit"
    },

];



displayPage(0, pizzy, "#food");
displayPage(0, napoje, "#drinks");

function displayPage(startIndex, poleProduktu, parent) {

    let parentElement = document.querySelector(parent);     
    let endIndex = startIndex + 3;
    for(let i = startIndex; i < endIndex; i++) {
        if (i >= poleProduktu.length) break;
        let produkt = poleProduktu[i];
        
        let article = document.createElement("article");
        article.classList.add("produkt");

        let img = document.createElement("img");
        img.src = produkt.image;

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("nazev");

        let name = document.createElement("h2");
        name.textContent = produkt.name;

        let price = document.createElement("p");
        price.textContent = produkt.price;

        let description = document.createElement("p");
        description.textContent = produkt.description;

        let buy = document.createElement("a");
        buy.href = "kosik.html";
        buy.classList.add("buy");
        buy.textContent = produkt.buy;

        nameDiv.append(name);
        nameDiv.append(price);
        article.append(img);
        article.append(nameDiv);
        article.append(description);
        article.append(buy);
        parentElement.append(article);
    }
}





