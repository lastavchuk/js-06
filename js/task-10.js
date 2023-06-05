function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    if (amount > 0) {
        let markup = '';
        let sizeDiv = 30;

        for (let i = 1; i <= amount; i++) {
            markup += `<div style="width: ${sizeDiv}px; height: ${sizeDiv}px; margin: 0 auto; background-color: ${getRandomHexColor()};"></div>\n`;
            sizeDiv += 10;
        }

        divBoxes.innerHTML = markup;
        return;
    }
    divBoxes.innerHTML = '<h2>Введи кількість більшу за 0 !</h2>';
}

const constols = document.querySelector('#controls');
const input = constols.firstElementChild;
const btnCreate = input.nextElementSibling;
const btnDestroy = constols.lastElementChild;

const divBoxes = constols.nextElementSibling;

let count = 0;
input.addEventListener('input', event => (count = event.currentTarget.value));

btnCreate.addEventListener('click', () => createBoxes(count));

btnDestroy.addEventListener('click', () => (divBoxes.innerHTML = ''));
