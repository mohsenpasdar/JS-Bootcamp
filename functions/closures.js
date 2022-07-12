const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        }, 
        decrement() {
            count--
        },
        getCount() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(counter.getCount());
counter.decrement()
console.log(counter.getCount());

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(3));

const createTipper = (baseTip) => {
    return (billAmount) => {
        return billAmount * baseTip
    }
}

const tip15 = createTipper(0.15)
console.log(tip15(50));