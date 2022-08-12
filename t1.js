const isPowOfTwo = (number) => {
    return ((number & (number - 1)) === 0) ? true : false
}

console.log(isPowOfTwo(16))
console.log(isPowOfTwo(14))
console.log(isPowOfTwo(4))
console.log(isPowOfTwo(32))
console.log(isPowOfTwo(5))
console.log(isPowOfTwo(64))