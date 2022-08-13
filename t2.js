const searchWordBySub = (string) => {
    var regex = RegExp("хром");
    return string.split(" ").find((elem, index) => {
        return regex.test(elem);
    })
}

console.log(searchWordBySub('Ми знаємо, що монохромний колір – це градації сірого'))