const valueEl = document.querySelector("#value");
console.log(valueEl);
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decremenet() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener("click", function () {
  counter.decremenet();
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
