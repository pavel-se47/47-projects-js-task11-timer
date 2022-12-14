const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const changeColorEl = document.querySelector('#change-color');
const startBtnEl = document.querySelector('button[data-action="start"]');
const stopBtnEl = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerChangeColor = null;

const startChangeColor = () => {
  startBtnEl.setAttribute('disabled', true);
  timerChangeColor = setInterval(() => {
    changeColorEl.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
};

const stopChangeColor = () => {
  startBtnEl.removeAttribute('disabled');
  clearInterval(timerChangeColor);
};

startBtnEl.addEventListener('click', startChangeColor);
stopBtnEl.addEventListener('click', stopChangeColor);
