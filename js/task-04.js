const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;
btnDec.addEventListener("click", onBtnDec);
btnInc.addEventListener("click", onBtnInc);

function onBtnDec() {
    counterValue--;
    value.innerHTML = counterValue;
}

function onBtnInc() {
    counterValue++;
    value.innerHTML = counterValue;
}
