class Counter {
    value = 0;

    increment() {
        this.value += 1
    }

    decrement() {
        this.value -= 1
    }

    log() {
        console.log(this.value)
    }
}
