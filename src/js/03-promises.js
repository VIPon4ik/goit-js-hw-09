'use strict';

import Notiflix from 'notiflix';

const formElem = document.querySelector('.form');

let counter = 0;
let intervalId;

formElem.addEventListener('submit', event => {
  event.preventDefault();

  if (intervalId) {
    clearInterval(intervalId);
  }

  const delayValue = formElem.delay.value;
  const stepValue = formElem.step.value;
  const amountValue = formElem.amount.value;

  promiseHandler(delayValue, stepValue);

  intervalId = setInterval(() => {
    if (counter >= Number(amountValue)) {
      clearInterval(intervalId);
      counter = 0;
      return;
    }

    promiseHandler(delayValue, stepValue);

  }, stepValue);
});

function promiseHandler(delayValue, stepValue) {
  counter++;

  createPromise(counter, Number(delayValue))
    .then(({ position, delay }) => {
      delay += stepValue * (position - 1);
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      delay += stepValue * (position - 1);
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
