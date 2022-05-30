# ДЗ 05

Все решения лежат в отдельных папках с номером задания. **Папки и файлы переименованы, т.к. считаю, что имена в коде должны быть на латинице.**

## Уровень 1.

### 01.01 Используя поиск по id, получите ссылку с текстом link4 и выведите ее в консоль.
```javascript
console.log(document.getElementById("four"));
```

### 01.02 Используя поиск по имени класса, получите все элементы с классом .one и выведите их в консоль.
```javascript
console.log(document.getElementsByClassName("one"));
```

### 01.03 Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с классом .card-link, которые находятся в .card-body и выведите их в консоль.
```javascript
let cardBody = document.querySelector(".card-body");
let cardLink = cardBody.querySelectorAll(".card-link");
console.log(cardLink);
```

### 01.04 Используя поиск по селектору (метод querySelector) найдите div с атрибутом aria-valuenow="50" и выведите его в консоль.
```javascript
let divAriaValueNow50 = document.querySelector('div[aria-valuenow="50"]');
console.log(divAriaValueNow50);
```

### 01.05 Выведите содержимое тега title в консоль.
```javascript
console.log(document.title);
```

### 02.01 Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с классом .media-body.
```javascript
let mt0El = document.querySelector(".mt-0");
let parentMt0El = mt0El.parentNode;
console.log(parentMt0El);
```

### 02.02 Добавьте в div c помощью appendChild следующую разметку:
`<h3>hello world</h3>`

```javascript
let elemContent = document.createElement("h3");
elemContent.innerText = "hello world";
let divEl = document.querySelector("div");
divEl.appendChild(elemContent);
```

### 02.03 Задание - удаление элементов.
1. Найдите элемент с классом .btn-outline-warning и удалите его.
2. Аналогичным образом удалите элемент с классом .btn-outline-dark
```javascript
let buttonWarning = document.querySelector(".btn-outline-warning");
buttonWarning.remove();
let buttonDark = document.querySelector(".btn-outline-dark");
buttonDark.remove();
```

### 02.04 Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка".
```javascript
let buttonInfo = document.querySelector(".btn-info");
buttonInfo.innerHTML = "Кнопка";
```

### 03.01 Найдите тег ul. И добавьте ему класс one.
```javascript
let ulEl = document.querySelector("ul");
ulEl.className = "one";
```

### 03.02 Найдите элемент с классом .nav-link и используя метод toggle из свойства classList у элемента, добавьте или уберите класс .active.
```javascript
let navLinkEl = document.querySelector(".nav-link");
navLinkEl.classList.toggle("active");
```

### 03.03 Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство classList у элемента, и метод remove().
```javascript
let dropdownMenuEl = document.querySelector(".dropdown-menu");
dropdownMenuEl.classList.remove("dropdown-menu");
```

### 03.04 Добавьте в div с классом .menu следующую разметку:
`<a href="#">link</a>` используя метод insertAdjacentHTML.
```javascript
let menuEl = document.querySelector(".menu");
menuEl.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');
```

### 03.05 Выведите в консоль значение атрибутов data-dismiss и aria-label с помощью метода getAttribute.
```javascript
let closeButton = document.querySelector(".close");
let dataDismiss = closeButton.getAttribute("data-dismiss");
let ariaLabel = closeButton.getAttribute("aria-label");
console.log(`data-dismiss = ${dataDismiss}; aria-label = ${ariaLabel};`);
```

### 03.06 Добавьте заголовку атрибут data-one="один" и атрибут data-two="два" с помощью метода setAttribute.
```javascript
let h1El = document.querySelector("h1");
h1El.setAttribute("data-one", "один");
h1El.setAttribute("data-two", "два");
```

### 03.07 Найдите заголовок с id="title", и замените значение id на что-то другое.
```javascript
let idTitleEl = document.getElementById("title");
idTitleEl.setAttribute("id", "anotherTitle");
```

### 04.01 Отследите когда все теги будут добавлены на страницу (событие DOMContentLoaded) и выведите alert'ом сообщение: "все теги добавлены на страницу".
```javascript
document.addEventListener('DOMContentLoaded', function () {
    alert("все теги добавлены на страницу");
})
```

### 04.02 Дождитесь когда все картинки загрузятся (событие load) и покажите с помощью alert сообщение: "все картинки загружены".
```javascript
window.addEventListener('load', function () {
    alert("все картинки загружены");
})
```

### 04.03 Сделайте, чтобы по клику по кнопке с классом .btn появлялся alert('клик').
```javascript
document.querySelector(".btn").addEventListener('click', function () {
    alert('клик');
})
```

### 04.04 Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "вы навели на textarea".
```javascript
document.querySelector("textarea").addEventListener('mouseover', function () {
    alert('вы навели на textarea');
})
```

## Уровень 2.

### 01.01 Задание
1. Сохраните в переменную коллекцию с картинками.
2. Пробегитесь по этой коллекции с помощью цикла или forEach
   и выведите каждую картинку в консоль. Выведите в консоль только
   элементы коллекции, не нужно пытаться сделать, чтобы в консоли
   появилось изображение.

```javascript
let images = document.getElementsByTagName("img");
for (let image of images) {
    console.log(image);
}
```

### 01.02 Задание
1. Сохраните в переменную коллекцию элементов с классом one. Для получения
   элементов используйте метод. getElementsByClassName()
2. С помощью цикла переберите эту коллекцию и выведите в консоль название тега.

```javascript
let classOneElements = document.getElementsByClassName("one");
for (let elem of classOneElements) {
    console.log(elem.tagName);
}
```

### 01.03 Задание
1. Сохраните в переменную коллекцию с тегами h2, используйте метод getElementsByTagName()
2. Пробегитесь по этой коллекции с помощью цикла и выведите в консоль значение
   атрибута class, используя свойство className.

```javascript
let tagH2Elements = document.getElementsByTagName("h2");
for (let elem of tagH2Elements) {
    console.log(elem.className);
}
```

### 01.04 Задание
1. Сохраните в переменную тег div.
2. Создайте переменную classes, и в нее сохраните значение свойства classList.
3. C помощью forEach переберите classes и выведите каждый класс в консоль.

```javascript
let divEl = document.querySelector("div");
let classes = divEl.classList;
classes.forEach((elem) => {
    console.log(elem);
})
```

### 01.05 Задание
1. Вам нужно получить этот div.
2. Затем обратитесь к списку классов и с помощью метода contains()
   проверьте есть ли класс hidden у этого тега.

```javascript
let divEl = document.querySelector("div");
let isHidden = divEl.classList.contains("hidden");
console.log(isHidden);
```

### 01.06 Задание
1. Найдите все "карточки" с классом .card.
2. Проверьте есть ли у карточки класс hidden с помощью метода contains(),
   и если есть, то удалите с помощью метода remove().

```javascript
let cardElements = document.querySelectorAll("div");
cardElements.forEach((card) => {
    if (card.classList.contains("hidden")) {
        card.remove();
    }
})
```

### 01.07 Задание
1. Получите все ссылки.
2. Проверьте, есть ли в ссылке текст "ссылка", и если нет, то добавьте.

```javascript
let linkElements = document.querySelectorAll("a");
linkElements.forEach((link) => {
    if (!link.innerText.length) {
        link.innerText = "ссылка";
    }
})
```

### 01.08 Задание
1. Получите все теги b.
2. С помощью метода contains() из classList, проверьте, есть ли у тега
   класс sign, и если нет, то тогда добавьте с помощью метода add()

```javascript
let boldElements = document.querySelectorAll("b");
boldElements.forEach((elem) => {
    if (!elem.classList.contains("sign")) {
        elem.classList.add("sign");
    }
})
```

### 01.09 Задание
1. Получите коллекцию тегов i.
2. Пробегитесь по этой коллекции и с помощью classList.toggle() сделайте,
   чтобы где класс green есть, его не стало, а где нету, чтобы появился.

```javascript
let italicElements = document.querySelectorAll("i");
italicElements.forEach((elem) => {
    elem.classList.toggle("green");
})
```

### 02.01 Задание
1. Получите кнопку и сохраните ее в переменную.
2. Назначьте кнопке обработку клика.
3. У функции-обработчика клика сделайте параметр event
4. При клике из event.target выведите в консоль: id, имя класса (используйте
   свойство className), текст на кнопке.

```javascript
let oneButton = document.getElementById("one");
oneButton.addEventListener('click', function (event) {
    let resultString = `id: ${event.target.id}, class: ${event.target.className}, innerText: ${event.target.innerText}`;
    console.log(resultString);
})
```

### 02.02 Задание
1. Назначьте обработку клика по параграфу, у функции обработчика объявите
   параметр event.
2. При клике выведите в консоль event.target.classList
3. Переберите с помощью forEach event.target.classList и выведите каждый класс
   в консоль.

```javascript
let paragraphElement = document.querySelector("p");
paragraphElement.addEventListener('click', function (event) {
    let eventClasses = event.target.classList;
    console.log(eventClasses);
    eventClasses.forEach((cls) => {
        console.log(cls);
    })
})
```

### 02.03 Задание
1. Сохраните ссылку на div в переменную
2. Назначьте div'у обработку клика, у функции-обработчика объявите параметр event.
3. При клике из event.target c помощью getAttribute() получите значение
   каждого атрибута и выведите в консоль.

```javascript
let divElement = document.querySelector("div");
divElement.addEventListener('click', function (event) {
    divElement.getAttributeNames().forEach((attr) => {
        console.log(`${attr} = ${divElement.getAttribute(attr)}`);
    })
})
```

### 02.04 Задание
1. Сохраните в переменную ссылку на .product
2. Назначьте обработку клика по .product, у функции обработчика объявите
   параметр event.
3. Сделайте, чтобы при клике содержимое .product поменялось на:
```html
<div>Другой товар</div>
<div>Другое описание</div>
```
для этого вышеописанную разметку пишите в виде строки в innerHTML.

```javascript
let newContent = `
    <div>Другой товар</div>
    <div>Другое описание</div>
`;

let productElement = document.querySelector(".product");
productElement.addEventListener('click', function (event) {
    productElement.innerHTML = newContent;
})
```

### 02.05 Задание
Назначьте обработчик клика по ul и при клике выводите в консоль
элемент, на котором произошел клик, с помощью event.target, где event - это
объект события, передаваемый в функцию-обработчик клика.

```javascript
let ulElement = document.querySelector("ul");
ulElement.addEventListener('click', function (event) {
    console.log(event.target);
})
```

### 03.01 Задание
Сделайте с помощью javascript размер шрифта в кнопке 30px,
а в textarea сделайте зеленый фон. Используйте свойство style у каждого
из элементов.

```javascript
let buttonElement = document.querySelector("button");
buttonElement.style.setProperty("font-size", "30px");
let textareaElement = document.querySelector("textarea");
textareaElement.style.setProperty("background-color", "green");
```