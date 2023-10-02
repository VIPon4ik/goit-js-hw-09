import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
      startButt.disabled = true;
      return;
    }

    startButt.disabled = false;

    dateToCount = selectedDates[0];

    clearInterval(intervalId);

    daysElem.textContent = '00';
    hoursElem.textContent = '00';
    minutesElem.textContent = '00';
    secondsElem.textContent = '00';
  },
};

const dateInput = document.querySelector('#datetime-picker');
flatpickr(dateInput, options);

const startButt = document.querySelector('button[data-start]');

const daysElem = document.querySelector('span[data-days]');
const hoursElem = document.querySelector('span[data-hours]');
const minutesElem = document.querySelector('span[data-minutes]');
const secondsElem = document.querySelector('span[data-seconds]');

let dateToCount;
let intervalId;

startButt.disabled = true;

startButt.addEventListener('click', () => {
  startButt.disabled = true;

  if (Date.now() > dateToCount) {
    clearInterval(intervalId);
    return;
  }

  let { days, hours, minutes, seconds } = convertMs(dateToCount - Date.now());

  const formattedTime = addLeadingZero(days, hours, minutes, seconds);

  daysElem.textContent = formattedTime.formattedDays;
  hoursElem.textContent = formattedTime.formattedHours;
  minutesElem.textContent = formattedTime.formattedMinutes;
  secondsElem.textContent = formattedTime.formattedSeconds;

  intervalId = setInterval(() => {
    if (Date.now() > dateToCount) {
      clearInterval(intervalId);
      return;
    }

    let { days, hours, minutes, seconds } = convertMs(dateToCount - Date.now());

    const formattedTime = addLeadingZero(days, hours, minutes, seconds);

    daysElem.textContent = formattedTime.formattedDays;
    hoursElem.textContent = formattedTime.formattedHours;
    minutesElem.textContent = formattedTime.formattedMinutes;
    secondsElem.textContent = formattedTime.formattedSeconds;
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(days, hours, minutes, seconds) {
  const formattedDays = String(days).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return { formattedDays, formattedHours, formattedMinutes, formattedSeconds };
}
