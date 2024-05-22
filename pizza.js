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

let menu = document.querySelector("#menu");
let counter = 0;

displayPage(counter);

function displayPage(startIndex) {
    let endIndex = startIndex + 3;
    for(let i = startIndex; i < endIndex; i++) {
        if (i >= pizzy.length) break;
        let pizza = pizzy[i];
        
        let article = document.createElement("article");
        article.classList.add("produkt");

        let img = document.createElement("img");
        img.src = pizza.image;

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("nazev");

        let name = document.createElement("h2");
        name.textContent = pizza.name;

        let price = document.createElement("p");
        price.textContent = pizza.price;

        let description = document.createElement("p");
        description.textContent = pizza.description;

        let buy = document.createElement("a");
        buy.href = "kosik.html";
        buy.classList.add("buy");
        buy.textContent = pizza.buy;

        nameDiv.append(name);
        nameDiv.append(price);
        article.append(img);
        article.append(nameDiv);
        article.append(description);
        article.append(buy);
        menu.append(article);
    }
}





let napoj = [
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

let piti = document.querySelector("#piti");
let kounter = 0;

displayPage(kounter);

function displayPage(startIndex) {
    let endIndex = startIndex + 3;
    for(let i = startIndex; i < endIndex; i++) {
        if (i >= napoj.length) break;
        let Piticka = napoj[i];

        let odstavec = document.createElement("article");
        odstavec.classList.add("produkt");

        let obr = document.createElement("img");
        obr.src = Piticka.image;

        let nazDiv = document.createElement("div");
        nazDiv.classList.add("nazev");

        let jmeno = document.createElement("h2");
        jmeno.textContent = Piticka.name; 

        let cena = document.createElement("p");
        cena.textContent = Piticka.price; 

        let koupit = document.createElement("a");
        koupit.href = "kosik.html";
        koupit.classList.add("buy");
        koupit.textContent = Piticka.buy; 

        nazDiv.append(jmeno);
        nazDiv.append(cena);
        odstavec.append(obr);
        odstavec.append(nazDiv);
        odstavec.append(koupit);
        piti.append(odstavec);
    }
}
