const header = document.querySelector("header");
const section = document.querySelector("section");

async function populate() {
    const url = "https://priyansht.github.io/24W-JavaScript-03-Week11/js/i-scream.json";
    const request = new Request(url);
    try {
        const response = await fetch(request);
        const responseJson = await response.json();
        console.log(responseJson);
        populateHeader(responseJson);
        showTopFlavors(responseJson);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

populate();

function populateHeader(jsonData) {
    const h1 = document.createElement("h1");
    h1.textContent = jsonData.companyName;
    header.appendChild(h1);
}

function showTopFlavors(jsonData) {
    const topFlavors = jsonData.topFlavors;
    for (const flavor of topFlavors) {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const image = document.createElement("img");
        const list = document.createElement("ul");

        h2.textContent = flavor.name;
        p1.textContent = "Calories: " + flavor.calories;
        p2.textContent = "Type: " + flavor.type;
        image.src = flavor.image;
        image.alt = flavor.name + " Ice Cream";

        for (const ingredient of flavor.ingredients) {
            const listItem = document.createElement("li");
            listItem.textContent = ingredient;
            list.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        article.appendChild(image);

        section.appendChild(article);
    }


    const butterscotch = {
        name: "Butterscotch",
        calories: 220,
        type: "ice-cream",
        ingredients: ["Butterscotch Syrup", "Toffee Bits", "Vanilla Base"],
        image: "https://www.clipartmax.com/png/middle/98-986553_butterscotch-picture-ice-cream.png\n"
    };
    addIceCream(butterscotch);


    const hersheys = {
        name: "Hershey's",
        calories: 240,
        type: "ice-cream",
        ingredients: ["Hershey's Chocolate Syrup", "Chocolate Chunks", "Vanilla Base"],
        image: "https://i.pinimg.com/736x/ab/66/f1/ab66f1cdf50fe7ab26d5cdff279c05b0.jpg"
    };
    addIceCream(hersheys);
}

function addIceCream(flavor) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const image = document.createElement("img");
    const list = document.createElement("ul");

    h2.textContent = flavor.name;
    p1.textContent = "Calories: " + flavor.calories;
    p2.textContent = "Type: " + flavor.type;
    image.src = flavor.image;
    image.alt = flavor.name + " Ice Cream";

    for (const ingredient of flavor.ingredients) {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        list.appendChild(listItem);
    }

    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(list);
    article.appendChild(image);

    section.appendChild(article);
}