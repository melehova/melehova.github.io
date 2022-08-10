# melehova.github.io

Home tasks from course

## Task 3

#### Завдання No1

Напишіть функцію ```isEven```, яка за допомогою побітових операторів визначатиме
чи є довільне ціле число парним?

#### Завдання No2

Задано довільний рядок виду 
`isu([syvstc]ts(crs))cs`, в якому довільним чином
можуть бути розставлені круглі або квадратні дужки, що відкриваються або
закриваються. Напишіть функцію 
```js
testString
```, яка визначатиме коректність
розміщення дужок (повертає true або false). Під коректністю мається на увазі
відсутність «перетину» різних видів дужок (наприклад, так `isu[syv(stc]ts(crs))cs`) або відповідність кожнії дужці, що відкривається такого
ж типу, але такої, що закривається.

#### Завдання No3

Створити структуру типу `Кільцевий масив`, яка буде створюватися так 
```js
let circledArray = new circleArray()
```
Елементи створюються так
```js
circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");
```
При наступних зверненнях 
```js
circledArray.get(4)
```
та 
```js
circledArray.get(-1)
```
мають
повернутися результати `Харків` та `Херсон`, відповідно.

#### Завдання No4

Напишіть функції-конструктори, які виводитимуть на сторінку зафарбовані
прямокутник та трикутник, відповідно.

#### Завдання No5

Опишіть функцію 
```js
substrCount()
```, яка повертає кількість входжень підрядка.
Функція приймає такі аргументи: input – рядок, у якому ведеться пошук, needle
– підрядок, що шукається, offset - зміщення початку відліку, length –
максимальна довжина рядка, у якій буде здійснюватися пошук підрядку після
зазначеного зсуву. Приклад виклику: substrCount('Good Golly Miss Molly', 'll', 7,
10).
