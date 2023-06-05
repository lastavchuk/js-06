const input = document.querySelector('#name-input');
const output = input.nextElementSibling.firstElementChild;

input.addEventListener(
    'input',
    event => (output.textContent = event.currentTarget.value || 'Anonymous')
);
