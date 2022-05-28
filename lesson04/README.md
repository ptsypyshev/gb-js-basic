# ДЗ 04

Все решения лежат в отдельных папках с номером задания.

## 1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект.
Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:  
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)  

Например, для числа 45 мы должны получить следующий объект:  
```javascript
{
    units: 5, //это единицы
    tens: 4,  //это десятки
    hundreds: 0, //это сотни
}
```

Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
***

Объявляем функцию `parseInt(input)`, создаем пустой объект `let result = {}`.  
Далее проверяем переданное значение `input` на соответствие условиям задачи.
Если условие выполняется, создаем поля для нашего объекта и возвращаем объект:
```javascript
if (Number.isInteger(input) && input >= 0 && input < 1000) {
        result.hundereds = (input / 100) >> 0;
        result.tens = ((input % 100) / 10) >> 0;
        result.units = input % 10;
        return result;
    }
```
При этом целочисленное деление осуществляем с помощью обычного деления и нулевого битового сдвига
(при этом целая часть остается, дробная отсекается).
Если условие не выполняется, то ругаемся в консоль и возвращаем пустой объект:
```javascript
console.error("Input value is not an Integer in range between 0 and 1000!");
    return result;
```

## 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6, конструктор Product.
Он принимает параметры name и price, сохраните их как свойства объекта.
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).
***

В стиле ES5 объявляем функцию-конструктор и с её помощью заполняем свойства объекта:
```javascript
function Product(name, price) {
    this.name = name;
    this.price = price;
}
```
Затем с помощью прототипа данного объекта создаем метод make25PercentDiscount:
```javascript
Product.prototype.make25PercentDiscount = function() {
    console.log(`Try to make 25% discount to product ${this.name} with price ${this.price}.`)
    this.price -= this.price*0.25
};
```

В стиле ES6 создаем класс, внутри которого объявляем конструктор и другие методы:
```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount = function() {
        console.log(`Try to make 25% discount to product ${this.name} with price ${this.price}.`)
        this.price -= this.price*0.25
    }

    show() {
        console.log(`Product ${this.name} has price ${this.price}.`)
    }
}
```

## 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6, объекты, использующие наследование.
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
***

В стиле ES5 объявляем функцию-конструктор и с её помощью заполняем свойства объекта:
```javascript
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
```
Затем с помощью прототипа данного объекта создаем метод show:
```javascript
Post.prototype.show = function() {
    return `This post is written by ${this.author} at ${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}. Content is "${this.text}".\n`;
};
```

Далее объявляем функцию-конструктор нового класса и с помощью метода call вызываем конструктор базового класса.
А также добавляем уникальные свойства для нового класса.

```javascript
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
```
Наследуемся с помощью прототипов от базового класса:
```javascript
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
```

Создаем собственный метод makeTextHighlighted:
```javascript
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
    console.log(`It makes this post highlighted.`)
};
```
А также переопределяем метод базового класса, т.к. добавилось ещё одно свойство.
При этом базовый метод используем внутри нового:
```javascript
AttachedPost.prototype.show = function() {
    return Post.prototype.show.call(this) + `Highlight status is ${this.highlighted}`;
};
```

В стиле ES6 создаем базовый класс, внутри которого объявляем конструктор и другие методы:
```javascript
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    show() {
        return `This post is written by ${this.author} at ${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}. Content is "${this.text}".\n`;
    }
}
```
Далее наследуем от него новый класс:
```javascript
class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    show() {
        return super.show() + `Highlight status is ${this.highlighted}`;
    }

    makeTextHighlighted() {
        this.highlighted = true;
        console.log(`It makes this post highlighted.`)
    };
}
```

## 2. (это задание не является частью учебной программы, делайте его по желанию). 
Для игры бродилка (которая есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
и игрок оставался на том же месте где стоял. 
***
По сути доработка сводится к правке файла mover.js.  
Для начала добавляем новые направления движения `const availableDirections = [1, 2, 3, 4, 5, 6, 7, 8, 9]` и в соответствии с ними изменяем алерты.  
Далее добавляем проверку на границы "площадки" и реализуем новый функционал по диагональному движению:
```javascript
switch (direction) {
            case 1:
                if (player.y < config.rowsCount - 1) {
                    nextPosition.y++
                }
                if (player.x > 0) {
                    nextPosition.x--;
                }
                break;
            case 2:
                if (player.y < config.rowsCount - 1) {
                    nextPosition.y++
                }
                break;
            case 3:
                if (player.y < config.rowsCount - 1) {
                    nextPosition.y++
                }
                if (player.x < config.colsCount - 1) {
                    nextPosition.x++
                }
                break;
            case 4:
                if (player.x > 0) {
                    nextPosition.x--;
                }
                break;
            case 6:
                if (player.x < config.colsCount - 1) {
                    nextPosition.x++
                }
                break;
            case 7:
                if (player.y > 0) {
                    nextPosition.y--;
                }
                if (player.x > 0) {
                    nextPosition.x--;
                }
                break;
            case 8:
                if (player.y > 0) {
                    nextPosition.y--;
                }
                break;
            case 9:
                if (player.y > 0) {
                    nextPosition.y--;
                }
                if (player.x < config.colsCount - 1) {
                    nextPosition.x++
                }
                break;
        }
```

## 3  (это задание не является частью учебной программы, делайте его по желанию).
На базе игры (приняв за пример), созданной в дополнительных видео, реализовать игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы, например метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты ответов в виде теста, например:  
Сколько букв в слове "привет":  
a. Пять.  
b. Шесть.  
c. Семь.  
d. Куда я попал?  
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
***

Создаем объект game, реализующий методы run() и init():
```javascript
let game = {
    run() {
        ...
    },

    init() {
        ...
    }
};
```
game.init() будет запускаться автоматически, выводить приветствие в консоль и алертом, с предложением запустить игру:
```javascript
init() {
        console.log(msg.greetings);
        console.log(msg.consoleInfoMsg);
        if (confirm(msg.greetings)) {
            game.run();
        } else {
            alert(msg.farewell);
        }
    }
```
game.run() запрашивает у пользователя его имя и в бесконечном цикле реализует игровой функционал.
Пользователю задаются вопросы, происходит подсчет количества очков и правильных ответов, осуществляется запрос на новую игру либо на выход.
```javascript
run() {
        player.SetName(prompt("Введите Ваше имя"));
        do {
            const result = asker.askQuestions();
            player.score= result.score;
            player.rightAnswers = result.rightAnswers;
            alert(msg.congrats(player));
            if (!confirm(msg.startNewGameMsg)) {
                alert(msg.farewell);
                return;
            }
        } while (true);
    },
```
Основная механика осуществляется asker'ом, реализующим методы makeQuestionMsg и askQuestions.
Первый подготавливает текстовку вопроса:

```javascript
makeQuestionMsg(question, answers, score)
{
    let ans = "";
    answers.forEach(function (answer, idx) {
        ans += `${String.fromCharCode(asciiFirstLetter + idx)}: ${answer}\n`;
    })
    return `Вопрос на ${score} рублей:\n${question}\n` + ans;
}
,
```
Второй пробегает по массиву с вопросами и осуществляет проверку ответов и подсчет:

```javascript
askQuestions()
{
    let score = 0;
    let rightAnswers = 0;
    questions.forEach(function (question) {
        let answer = prompt(asker.makeQuestionMsg(question.question, question.answers, question.addScore)).toUpperCase();
        if (answer.charCodeAt(0) - asciiFirstLetter === question.rightAnswer) {
            score += question.addScore;
            rightAnswers++;
            alert(msg.successMsg);
        } else {
            alert(msg.failMsg);
        }
    })
    return {rightAnswers: rightAnswers, score: score};
}
,
```