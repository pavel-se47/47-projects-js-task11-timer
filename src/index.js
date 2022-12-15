const bodyEl = document.querySelector('#main-timer');
const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ onTick, selector, targetDate }) {
    this.onTick = onTick;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  remainingTime() {
    bodyEl.firstElementChild.setAttribute('id', this.selector);
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      const time = getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
}

const getTimeComponents = time => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
};

const updateClockFace = ({ days, hours, mins, secs }) => {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${mins}`;
  secsEl.textContent = `${secs}`;
};

const timerOne = new CountdownTimer({
  onTick: updateClockFace,
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2023'),
});

timerOne.remainingTime();

// const timerTwo = new CountdownTimer({
//   onTick: updateClockFace,
//   selector: '#timer-2',
//   targetDate: new Date('Jul 25, 2024'),
// });

// timerTwo.remainingTime();
