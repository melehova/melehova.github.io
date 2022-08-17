# melehova.github.io

Home tasks from course

## Task 5


### Задание 1

* в функции `openWnd()`:
    1. Откройте новое окно со следующими параметрами:
        - `ширина`: 300,
        - `высота`: 200
        - окно должно быть открыто строго по середине экрана
    2. Передайте фокус созданному окну


* в функции `writeToDocument()`:
    1. Запишите в документ дочернего окна содержание, состоящее из полного набора элементов, включая `html`, `head`, `body`, `title`
    2. Включите в содержание элемент `style` с содержанием: `html{background:#369;color:#fff;font:16px calibri, sans-serif;}`
    3. Включите в содержание элемент `p` с содержанием `Текст параграфа`
    4. Включите в содержание элемент `script` с содержанием `alert(opener.name)`

* в функции `closeWnd()`:
    1. Проверьте, существует ли дочернее окно и не закрыто ли оно 
	2. Если окно существует, то закройте его

### Задание 2

Создайте и опишите функцию `checkForm()`, которая должна вызываться перед отправкой формы

В функции необходимо проверить, все ли поля заполнены

Если все поля заполнены, то отправить форму

Если хотя бы одно поле не заполнено:
- выдать `alert()` с предупреждением
- изменить цвет рамки пустого поля на `красный`
- данные не отправлять!

### Задание 3

Опишите функцию `addYear()`, которая аргумент:
* `flag` - число, указывающее на место добавления нового элемента option:
    * `0` - в начало списка
    * `1` - в конец списка

1. Найдите форму
2. Определитесь, куда добавлять элемент: в конец, или в начало списка
3. Определите `value` последнего элемента списка и увеличьте или уменьшите его на `1`
4. Создайте новый элемент списка
5. Кроссбраузерно добавьте созданный элемент в начало или конец списка

### Задание 4

* Создайте и опишите функцию `showDOM()`, которая открывает новое окно браузера и выводит на экран структуру текущего документа, вызывая рекурсивную функцию `showChildNodes(node, doc)`

    1. Откройте новое окно
    2. Отрисуйте в новом окне открывающие тэги `<html>` и `<body>` (`document.write`!)
    3. Вызовите вышеописанную	функцию `showChildNodes()`, передав в качестве параметров:
        - корневой элемент документа (`document.documentElement`) или тело документа (`document.body`)
        - ссылку на объект `Document` нового окна
    4. Отрисуйте в новом окне закрывающие тэги `</html>` и `</body>`

* Создайте и опишите рекурсивную функцию `showChildNodes(node, doc)`, которая отрисовывает дочерние узлы текущего узла.

    Функция должна принимать два аргумента:
    - `node`: текущий узел
    - `doc`: ссылку на объект `Document` нового окна, в который производится вывод

    Проверьте тип текущего узла
    1. Если это текстовый узел - отрисуйте его содержание
    2. Если это узел-элемент - выведите его название и ... вызовите эту функцию для каждого из дочерних узлов

### Задание 5

Создайте в элементе `div` таблицу `с помощью методов DOM`

### Задание 6

* Опишите функцию `setPlusIcon()`, которая 
    - устанавливает для элементов `li` значок [+], если этот элемент имеет вложенный список
    - регистрирует функцию `aClick()` в качестве обработчика события `onclick` для всех ссылок

* Запустите функцию `setPlusIcon()` при загрузке страницы

* Опишите функцию `aClick()`, которая обрабатывает щелчок по ссылке
    1. Получите объект - ссылку, по которой был сделан щелчок 
    2. Найдите родительский `li`
    3. Найдите вложенный список
    4. Если вложенных списков нет - разрешите переход по ссылке
    5. Назначьте вложенному списку нужные свойства и поменяйте иконку
    6. Запретите переход по ссылке