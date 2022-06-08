# ДЗ 06

Все решения лежат в отдельных папках с номером задания. **Папки и файлы переименованы, т.к. считаю, что имена в коде должны быть на латинице.**

## Уровень 1.

### 01. Сделайте чтобы в src была картинка 2.jpg.
```javascript
let targetImage = document.querySelector("img");
targetImage.setAttribute("src", "images/2.jpg");
```

### 02. Найдите все дивы и добавьте им padding: 10px.
```javascript
let divElements = document.getElementsByTagName("div");
for (let divElement of divElements) {
    divElement.style.padding = "10px";
}
```

### 03. Сделайте всем элементам .product какой-нибудь фон, а также сделайте элементам .productName размер шрифта 24px.
```javascript
let productElements = document.querySelectorAll(".product");
productElements.forEach(function (product) {
    product.style.backgroundColor = "lightgreen";
})
let productNameElements = document.querySelectorAll(".productName");
productNameElements.forEach(function (productName) {
    productName.style.fontSize = "24px";
})
```

### 04. Вызовите функцию setTimeout с задержкой 3 сек, запускающую функцию alert со строкой "message".
```javascript
setTimeout(function() {
    alert("message");
}, 3000);
```

### 05. Сделайте, чтобы у всех инпутов снизу был внешний отступ.
```javascript
let inputElements = document.querySelectorAll("input");
inputElements.forEach(function (el) {
    el.style.marginBottom = "2em";
})
```

### 06. Инпуты идут один за другим, надо сделать чтобы после каждого инпута появился тег br, чтобы инпуты стали стоять один под другим.
```javascript
let inputElements = document.querySelectorAll("input");
inputElements.forEach(function (el) {
    el.insertAdjacentHTML("afterend", "<br>");
})
```

## Уровень 2.

### 01. Вывести в блок `<span>` содержимое инпута.
```javascript
let spanEl = document.querySelector("span");
let fromEl = document.getElementById("from");
fromEl.addEventListener("blur", function (event) {
    spanEl.innerText = event.target.value;
})
```

### 02. Вывести анимированное сообщение при нажатии на кнопку.
```javascript
let btn = document.querySelector("button");
let msg = document.querySelector(".message");
btn.addEventListener("click", function (event) {
    msg.classList.add("animate__animated", "animate__fadeInLeftBig");
    msg.style.display = "block";    
})
```

### 03. Используя заготовку, реализовать анимацию подсветки звезд рейтинга
```javascript
let goldenClass = 'golden';
let idElements = ['first', 'second', 'third', 'fourth', 'fifth'];
let stars = {};
for (let elem of idElements) {
    stars[elem] = document.getElementById(elem);
}

for (const [key, value] of Object.entries(stars)) {
    value.addEventListener('mouseover', function(event) {
        console.dir(event);
        let step = event.target;
        while (step) {
            if (!step.classList.contains(goldenClass)) {
                step.classList.add(goldenClass);
            }
            step = step.previousElementSibling;
        }
    });

    value.addEventListener('mouseout', function(event) {
        let step = event.target;
        while (step) {
            step.classList.remove(goldenClass);
            step = step.previousElementSibling;
        }
    });
}
```

## Уровень 3.

### 01. Надо сделать, чтобы по клику на крестик исчезало тот блок с сообщением, в котором этот крестик находится.
```javascript
let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", closeClickHandler);
})

function closeClickHandler(event) {
    event.currentTarget.parentNode.style.display = "none";
}
```

### 02. Нужно чтобы при клике по кнопке, блок .product, в котором она находится становился цвета (имеется в виду background) lightgreen, а текст на кнопке стал "Добавлено".
```javascript
let buttons = document.querySelectorAll(".product");
buttons.forEach(function (button) {
    button.addEventListener("click", buttonClickHandler);
})

function buttonClickHandler(event) {
    event.target.parentNode.style.background = "lightgreen";
    event.target.innerText = "Добавлено";
}
```

### 03. Вам нужно проверять пусто ли в input'ах при отправке формы.
Если в инпуте пусто делаете ему красную рамку. Если хотя бы в одном инпуте пусто форма не должна отправляться.
```javascript
let formEl = document.querySelector("form");
let inputIDs = ['first', 'second'];

formEl.addEventListener("submit", function (event) {
    let isFormValid = true;
    for (const inputID of inputIDs) {
        let inputEl = document.getElementById(inputID);
        if (inputEl.value === "") {
            inputEl.style.borderColor = "red";
            isFormValid = false;
        }
    }

    if (!isFormValid) {
        event.preventDefault();
    }
})
```

### 04. Сделайте, чтобы при прокрутке от верха экрана больше чем на 500px появлялся блок #goToTop, а если меньше, то чтобы исчезал.
Дополнительно добавил функционал перехода при клике на кнопку "Наверх".
```javascript
let goToTopEl = document.getElementById("goToTop");
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        goToTopEl.style.display = "block";
    } else {
        goToTopEl.style.display = "none";
    }
})

goToTopEl.addEventListener("click", function () {
    window.scrollTo(0,0);
})
```

### 05. Нужно через 3 секунды заменить все картинки loading.gif на картинки из папки images.
```javascript
setTimeout(function () {
    let images = document.querySelectorAll("img");
    for (const idx in images) {
        images[idx].setAttribute("src",`images/${+idx + 1}.jpg`);
    }
}, 3000)
```