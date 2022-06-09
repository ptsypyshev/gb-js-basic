# ДЗ 07

Все решения лежат в отдельных папках с номером задания.  
**Папки и файлы переименованы, т.к. считаю, что имена в коде должны быть на латинице.**

## Уровень 1.

### 01. Используя цикл for in переберите объект products, ведите в консоль
        имя свойства, значение свойства.
```javascript
for (const productsKey in products) {
    console.log(`${productsKey} = ${products[productsKey]}`)
}
```

### 02. С помощью innerHTML очистите содержимое параграфа.
```javascript
let p = document.querySelector("p");
p.innerHTML = "";
```

### 03. Дописывайте в строку totalString с помощью цикла и конкатенации строки, так, чтобы итоговое значение в totalString получилось: слово1слово2слово3.
```javascript
for (let i = 1; i < 4; i++) {
    totalString += `слово${i}`;
}
console.log(totalString);
```

### 04. С помощью insertAdjacentHTML добавьте в body ссылку по примеру из комментария.
```javascript
let url = "https://picsum.photos/200/300";
let targetAttr = "_blank";
let linkText = "ссылка";
document.body.insertAdjacentHTML("afterbegin", `<a href="${url}" target="${targetAttr}">${linkText}</a>`)
```

## Уровень 2.

### 01. Нужно при клике на кнопку выводить в консоль значения ее data-атрибутов.
```javascript
let buttons = document.querySelectorAll("button");
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        console.log(event.target.dataset.value);
    })
})
```

### 02. С помощью цилка for добавьте в body 6 картинок, по примеру тех, что закомментированы.
Картинки вставляйте со помощью insertAdjacentHTML. При генерации разметки пользуйтесь шаблонным литералом.
```javascript
for (let i = 6; i > 0; i--) {
    document.body.insertAdjacentHTML("afterbegin", `<img src="https://picsum.photos/200/300?random=${i}" alt="pic${i}">`)
}
```

### 03. Нужно чтобы при смещении ползунка в div менялся размер шрифта.
```javascript
let inputEl = document.querySelector("input");
let divEl = document.querySelector("div");
inputEl.addEventListener("input", function (event) {
    divEl.style.fontSize = `${event.target.value}px`;
})
```

## Уровень 3.

### 01. Нужно сделать, чтобы при кликах по .nav-link:
1. Класс active назначался тому .nav-link, по которому кликнули, а у предыдущего .nav-link, чтобы этот класс убирался.
2. В зависимости от того по какому .nav-link кликнули нужно чтобы менялся текст  в .text, соответствующие тексты вы найдете в app.js

```javascript
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let navLinkElements = document.querySelectorAll(".nav-link");
let classTextElement = document.querySelector(".text");
navLinkElements.forEach(function (el) {
    el.addEventListener("click", clickHandler);
})

function clickHandler(event) {
    changeActiveClass(event);
    changeText(event);
}

function changeActiveClass(event) {
    let prevActiveEl = document.querySelector(".active");
    prevActiveEl.classList.toggle("active");
    event.target.classList.toggle("active");
}

function changeText(event) {
    let textNumber = event.target.textContent.slice(-1);
    classTextElement.innerHTML = texts[`text${textNumber}`]
}
```

### 02. Вам нужно чтобы при клике на кнопку появлялось сообщение .message снизу экрана, в общем как сообщения вконтакте.
```javascript
let messageEl = document.querySelector(".message");
let btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
    let audioElement = new Audio('notification.mp3');
    audioElement.play();

    let styleMsg = getComputedStyle(messageEl);
    let styleMsgBR = parseInt(styleMsg.borderRadius, 10);
    let styleMsgPadding = parseInt(styleMsg.padding, 10);
    let msgMovePx = messageEl.clientHeight + styleMsgBR + styleMsgPadding;

    messageEl.style.transform = `translateY(-${msgMovePx}px)`;
})
```

## Уровень 4.

### 01. Вам нужно при кликах по кнопкам показывать соответствующие товары.
```javascript
let mainDivEl = document.querySelector(".products");
let buttons = document.querySelectorAll("button");
buttons.forEach(function (btn) {
    btn.addEventListener("click", clickHandler)
})

function clickHandler(event) {
    mainDivEl.innerHTML = "";
    showCategory(event.target.dataset.type);
}

function showCategory(category) {
    for (let product of products[category]) {
        mainDivEl.insertAdjacentHTML("beforeend", getProductMarkup(product));
    }
}

function getProductMarkup(product) {
    let productHTML = `
    <div class="product">
    <div>${product.name}</div>
    <img src="${product.imageUrl}" alt="">
    <div>${product.price}</div>
    <a href="https://example.com/producs/${product.id}">Подробнее</a>
    </div>
    `;
    return productHTML;
}
```

### 02. Вам нужно в цикле for создать отложенные вызовы с помощью setTimeout. Т.е. в цикле должны быть вызовы функции setTimeout.
```javascript
const speedFactor = 30; // Decrease value to make it faster!
for (let i = 0; i <=100; i++) {
    setTimeout(function () {
        console.log(i);
        changeProgress(i);
    }, speedFactor*i);
}
```
