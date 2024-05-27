let pizzy = [
    {
        "id": "1",
        "name": "Margherita",
        "price": "149 Kč",
        "description": "Tato klasická pizza je vyrobena z rajčatového základu, mozzarelly a čerstvé bazalky.",
        "image": "img/margherita.png",
        "buy": "Koupit",
        "detail": "info"
    },
    {
        "id": "2",
        "name": "Pepperoni",
        "price": "159 Kč",
        "description": "Pepperoni pizza je oblíbená volba s pikantními plátky salámu, rajčatovým základem a mozzarellou.",
        "image": "img/pepperoni.png",
        "buy": "Koupit",
        "detail": "info"
    },
    {
        "id": "3",
        "name": "Hawai",
        "price": "169 Kč",
        "description": "Hawai pizza kombinuje sladkost ananasu se šunkou na rajčatovém základu s mozzarellou.",
        "image": "img/hawai.png",
        "buy": "Koupit",
        "detail": "info"
    }
];


let napoje = [
    {
        "id": "4",
        "name": "Coca-Cola",
        "price": "79 Kč",
        "description": "Coca-cola 1.5L",
        "image": "img/cola.jpg",
        "buy": "Koupit",
        "detail": ""
    },
    {
        "id": "5",
        "name": "Fanta",
        "price": "59 Kč",
        "description": "Fanta 1.5L",
        "image": "img/fanta.jpg",
        "buy": "Koupit",
        "detail": ""
    },
    {
        "id": "6",
        "name": "Domácí limonáda",
        "price": "69 Kč",
        "description": "Domácí limonáda 0.75L",
        "image": "img/limonada.jpg",
        "buy": "Koupit",
        "detail": "info"
    }

];

let detail = [
    {
        "id": "1",
        "name": "Margherita",
        "price": "149 Kč",
        "description": "Pizza Margherita je klasická italská pizza, která se vyznačuje jednoduchostí a kvalitou surovin. Naše Margherita je připravena z čerstvého těsta, rajčatové omáčky, mozzarelly a bazalky. Tato kombinace vytváří harmonii chutí, kterou si zamilujete. Perfektní volba pro milovníky tradičních italských chutí.",
        "slozeni": "Složení:",
        "sl1": "Čerstvé těsto",
        "sl2": "Rajčatová omáčka",
        "sl3": "Mozzarella",
        "sl4": "Extra panenský olivový olej",
        "sl5": "Sůl",
        "sl6": "",
        "sl7": "",
        "image": "img/margherita.png",
        "buy": "Koupit",
    },
    {
        "id": "2",
        "name": "Pepperoni",
        "price": "159 Kč",
        "description": "Pizza Pepperoni, ikona mezi milovníky pizzy, se chlubí bohatou kombinací chutí a výrazným kouskem. Naše Pizza Pepperoni je vytvořena s láskou a péčí, spojující čerstvé ingredience s tradičními postupy přípravy, aby každý kousek byl autentickým zážitkem pro vaše chuťové pohárky. S plátky pikantní pepperoni, které dodávají tu správnou štiplavost, a tím, že používáme kvalitní mozzarellu a rozinky našeho domácího těsta, vytváříme chuťovou symfonii, která okouzlí každého gurmána.",
        "slozeni": "Složení:",
        "sl1": "Čerstvé těsto",
        "sl2": "Rajčatová omáčka",
        "sl3": "Mozzarella",
        "sl4": "Pikantní pepperoni",
        "sl5": "Extra panenský olivový olej",
        "sl6": "Sůl",
        "sl7": "",
        "image": "img/pepperoni.png",
        "buy": "Koupit",
    },
    {
        "id": "3",
        "name": "Hawai",
        "price": "169 Kč",
        "description": "Pizza Hawai, s kombinací šťavnatého ananasu a slaného šunky, přináší exotický nádech do světa italských pochoutek. Naše Pizza Hawai je symbolem osvěžujícího kontrastu, kde se sladké a slané střetávají v dokonalé symbióze chutí. S každým soustem prožijete dobrodružství na vašem jazyku, které vás přenese na tropickou pláž s každým kouskem.",
        "slozeni": "Složení:",
        "sl1": "Čerstvé těsto",
        "sl2": "Rajčatová omáčka",
        "sl3": "Mozzarella",
        "sl4": "Kvalitní šunka",
        "sl5": "Čerstvý ananas",
        "sl6": "Extra panenský olivový olej",
        "sl7": "Sůl",
        "image": "img/hawai.png",
        "buy": "Koupit",
    },
    {
        "id": "6",
        "name": "Domácí limonáda",
        "price": "69 Kč",
        "description": "Naše domácí limonáda je vytvořena z čerstvých ingrediencí, které zaručují jedinečnou kvalitu a chuť. Každá sklenice obsahuje čerstvě vymačkanou šťávu z nejlepších citronů, smíchanou s přesně naměřeným množstvím kvalitního cukru a osvěžující vodou. Bez umělých barviv, konzervantů či přísad, naše limonáda je zárukou čisté a přírodní chuti, která osvěží vaše smysly.",
        "slozeni": "Složení:",
        "sl1": "Čerstvé vymačkané citrony",
        "sl2": "cukr",
        "sl3": "voda",
        "sl4": "plátky čerstvého citronu",
        "sl5": "lístky máty",
        "sl6": "",
        "sl7": "",
        "image": "img/limonada.jpg",
        "buy": "Koupit",
    }

];


let kosik = [

    {
        "id": "1",
        "name": "Margherita",
        "cena": "149 Kč",
        "buy": "Koupit",
        "image": "img/margherita.png",
        "cislo": "1"
    },
    {
        "id": "2",
        "name": "Pepperoni",
        "cena": "159 Kč",
        "buy": "Koupit",
        "image": "img/pepperoni.png",
        "cislo": "1"
    },
    {
        "id": "3",
        "name": "Hawai",
        "cena": "169 Kč",
        "buy": "Koupit",
        "image": "img/hawai.png",
        "cislo": "1"
    },
    {
        "id": "4",
        "name": "Coca-Cola",
        "cena": "79 Kč",
        "buy": "Koupit",
        "image": "img/cola.jpg",
        "cislo": "1"
    },
    {
        "id": "5",
        "name": "Fanta",
        "cena": "59 Kč",
        "buy": "Koupit",
        "image": "img/fanta.jpg",
        "cislo": "1"
    },
    {
        "id": "6",
        "name": "Domácí limonáda",
        "cena": "69 Kč",
        "buy": "Koupit",
        "image": "img/limonada.jpg",
        "cislo": "1"
    },


];