const timerRef = document.querySelector("#timer-1");
const daysRef = document.querySelector("span[data-value='days']");
const hoursRef = document.querySelector("span[data-value='hours']");
const minsRef = document.querySelector("span[data-value='mins']");
const secsRef = document.querySelector("span[data-value='secs']");

const timer = {
  start() {
    const targetDate = new Date("Jan 19, 2021");

    setInterval(() => {
      const currentDate = Date.now();

      const deltaTime = targetDate - currentDate;
      // console.log(deltaTime);

      updateTimer(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateTimer(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
