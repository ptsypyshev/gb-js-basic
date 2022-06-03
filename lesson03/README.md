# ДЗ 03

Все решения лежат в отдельных папках с номером задания.

## 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно
Чтобы результат выглядел так:
0 – это ноль  
1 – нечетное число  
2 – четное число  
3 – нечетное число  
…  
10 – четное число  

Запускаем цикл и проверяем условия (либо число равно 0, либо смотрим на остаток от деления на 2):
```javascript
for (let i = 0; i <=10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}
```
Результат выводится в консоль.

## 2. Выведите в консоль значения, указанные рядом с комментариями:

```javascript
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
```

Для вывода значений используем доступ к свойствам объекта либо к индексам массива:
```javascript
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
```

## 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%

```javascript
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
```
Создаем константу, отражающую размер скидки:
```javascript
const discount = 0.15
```

Используя метод массива forEach обращаемся к каждому элементу массива и изменяем свойство price у каждого элемента. Результат выводим в консоль (метод изменяет исходный массив):
```javascript
products.forEach(function (elem) {
    elem.price -= elem.price * discount
})

console.log(products)
```

## 4. Перед вами находится массив с продуктами в интернет-магазине.
```javascript
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
```
Вам нужно:
1. Получить все товары, у которых есть фотографии.
2. Отсортируйте товары по цене (от низкой цены к высокой).

Для начала создадим отдельную переменную для отфильтрованных данных и используем метод filter:
```javascript
let productsFilteredByPhotos = products.filter(function (product) {
    return product.photos != null && product.photos.length > 0;
});
```
В новую переменную попадут объекты, у которых есть свойство photos (предполагаем массив) и там есть элементы.  

Далее создаем переменную productsSortedByPrice и копируем туда исходный массив с товарами.
Затем с помощью метода sort производим сортировку по свойству price:
```javascript
let productsSortedByPrice = products;
productsSortedByPrice.sort(function(a, b) {
    return a.price - b.price;
});
```

Результаты выводим в консоль:

```javascript
console.log(productsFilteredByPhotos);
console.log(productsSortedByPrice);
```

## 5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
Используем возможность запуска дополнительного функционала в поле для изменения итератора (запускается после исполнения тела цикла). Вывод в консоль производится именно там, тело цикла пустое.
```javascript
for (let i = 0; i < 10; console.log(i), i++) {};
```

## 6. Нарисовать горку с помощью console.log (используя цикл for), количество рядов - 20

Для начала объявляем константу и инициализируем переменную, которая будет выводиться в строку.
```javascript
const rowsCount = 20
let row = ""
```
Затем в цикле проходим от 0 до rowsCount, добавляем "x" на каждом шагу к row и выводим результат в консоль:
```javascript
for (let i = 0; i < rowsCount; i++) {
    row += "x";
    console.log(row);
};
```
