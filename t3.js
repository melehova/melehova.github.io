class circleArray extends Array {
    constructor() {
        super()
    }

    add(element) {
        return this.push(element)
    }

    get(index) {
        return this.at(index % this.length)
    }
}

// let circledArray = new circleArray()

// circledArray.add("Київ");
// circledArray.add("Харків");
// circledArray.add("Херсон");

// console.log(circledArray.get(4))// Харків 
// console.log(circledArray.get(-1)) // Херсон
