const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }
}




const decrementBtnRef = document.querySelector('[data-action="decrement"]');
console.log(decrementBtnRef);

const valueRef = document.querySelector('#value');
console.log(valueRef);

const incrementBtnRef = document.querySelector('[data-action="increment"]');
console.log(incrementBtnRef)

decrementBtnRef.addEventListener('click', function () {
    console.log('Click of decrement');

    counterValue.decrement();
    console.log(counterValue);

    valueRef.textContent = counterValue.value;
});

incrementBtnRef.addEventListener('click', function () {
    console.log('Click of increment');

    counterValue.increment();
    console.log(counterValue);

    valueRef.textContent = counterValue.value;
})