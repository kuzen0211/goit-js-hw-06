const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
    console.log('Click of decrement');

    counterValue.decrement();
    console.log(counterValue);

    value.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Click of increment');

    counterValue.increment();
    console.log(counterValue);

    value.textContent = counterValue.value;
});
