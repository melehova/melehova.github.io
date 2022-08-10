const substrCount = (input, needle, offset, length) => {
    input = input.slice(offset, offset + length)
    let counter = 0;
    for (counter = 0; input.search(needle) >= 0; counter++) {
        input = input.replace(needle, '')
    }
    return counter
}

// console.log(substrCount('Good Golly Miss Molly', 'll', 7, 10))