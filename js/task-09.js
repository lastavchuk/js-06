function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const span = button.previousElementSibling.firstElementChild;

button.addEventListener('click', () => {
    const hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;
    span.textContent = hexColor;
});
