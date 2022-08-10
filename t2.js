const testString = (string) => {
    const allBrackets = {
        ')': '(',
        ']': '['
    };
    let brackets = new Array();

    [...string].forEach(char => {
        if (Object.values(allBrackets).includes(char)) { // open bracket
            brackets.push(char)
        } else if (Object.keys(allBrackets).includes(char)) { // close bracket
            if (allBrackets[char] === brackets.at(-1))
                brackets.pop()
            else
                brackets.push(char)
        }
    });
    return brackets.length ? false : true
}

// console.log(testString('isu([syvstc]ts(crs))c'),
//     testString('isu[syv(stc]ts(crs))cs'),
//     testString('(())[]([])'),
//     testString('[([)])]'))




