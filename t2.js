const searchWordBySub = (string) => {
    let regex = RegExp("хром");
    return string.split(" ").find((elem, index) => {
        return regex.test(elem);
    })
}


console.log(searchWordBySub('Ми знаємо, що монохромний колір – це градації сірого'))