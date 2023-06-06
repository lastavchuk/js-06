const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");

const markUp = ingredients.map((el) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = el;
    return li;
});

list.append(...markUp);
