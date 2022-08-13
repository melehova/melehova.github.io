const strPad = (input, fullLen, fillStr, fillType = 'FILL_RIGHT') => {
    let str = (fillStr.repeat(Math.ceil((fullLen - input.length) / fillStr.length))).slice(0, fullLen - input.length)
    switch (fillType) {
        case 'FILL_RIGHT':
            return input + str
        case 'FILL_LEFT':
            return str + input
        case 'FILL_BOTH':
            return str.slice(0, str.length / 2) + input + str.slice(str.length / 2)
        default:
            break;
    }
}

console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT')); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**