const input = document.querySelector('#font-size-control');
const text = input.nextElementSibling.nextElementSibling;

input.addEventListener(
    'input',
    event => (text.style.fontSize = `${event.currentTarget.value}px`)
);
