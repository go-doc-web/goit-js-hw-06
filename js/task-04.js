// Не знаю зачем но сделал через обьект

const counter = {
  value: 0,
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector("#value"),

  increment() {
    return (this.value += 1);
  },
  decrement() {
    return (this.value -= 1);
  },

  negativeColorValue() {
    if (this.value < 0) {
      counter.counterValue.style.color = "red";
    } else {
      counter.counterValue.style.color = "inherit";
    }
  },

  valueTextContent() {
    return (counter.counterValue.textContent = counter.value);
  },

  onIncrementBtn() {
    this.increment();
    this.negativeColorValue();
    this.valueTextContent();
  },

  onDecrementBtn() {
    this.decrement();
    this.negativeColorValue();
    this.valueTextContent();
  },
};

const onIncrementBtnClick = counter.onIncrementBtn.bind(counter);
const onDecrementBtnClick = counter.onDecrementBtn.bind(counter);

counter.incrementBtn.addEventListener("click", onIncrementBtnClick);
counter.decrementBtn.addEventListener("click", onDecrementBtnClick);
