const getNames = (string) => {
    let regex = RegExp(/\w+, \w+/g);
    let result = ''
    string.match(regex).forEach(name => {
        result += `${name.split(', ')[1]} ${name.split(', ')[0]}\n` // replace
    });
    return result.slice(0, -1) // remove extra \n
}

let names = 'Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo'
console.log(getNames(names))