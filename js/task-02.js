const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");
const markUp = ingredients
    .map((element) => `<li class="item">${element}</li>`)
    .join("");
list.insertAdjacentHTML("afterbegin", markUp);
