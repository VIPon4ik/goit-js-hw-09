'use strict';

const startButt = document.querySelector('button[data-start]');
const stopButt = document.querySelector('button[data-stop]');

let intervalId;

stopButt.disabled = true;


startButt.addEventListener('click', () => {
    stopButt.disabled = false;
    startButt.disabled = true;

    intervalId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    },1000)
});


stopButt.addEventListener('click', () => {
    startButt.disabled = false;
    stopButt.disabled = true;

    clearInterval(intervalId);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
