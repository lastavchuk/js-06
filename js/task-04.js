const value = document.querySelector('#value');
const btnDec = value.previousElementSibling;
const btnInc = value.nextElementSibling;

let counterValue = 0;
btnDec.addEventListener('click', () => (value.innerHTML = --counterValue));
btnInc.addEventListener('click', () => (value.innerHTML = ++counterValue));
