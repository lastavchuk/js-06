const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;
btnDec.addEventListener("click", () => (value.innerHTML = --counterValue));
btnInc.addEventListener("click", () => (value.innerHTML = ++counterValue));
