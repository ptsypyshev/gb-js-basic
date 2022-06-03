'use strict';

//пример 1
let a = 1, b = 1, c, d;
c = ++a;        // Т.к. инкремент префиксный, то сначала увеличиваем a на 1 и присваиваем c получившееся значение
alert(c);       // ответ: 2
                // a = 2, b = 1, c = 2, d = undefined

//пример 2
d = b++;        // Т.к. инкремент постфиксный, то сначала присваиваем d значение b, а затем увеличиваем b на 1
alert(d);       //ответ: 1
                // a = 2, b = 2, c = 2, d = 1

//пример 3
c = 2 + ++a;    // Т.к. инкремент префиксный, то сначала увеличиваем a на 1, прибавляем 2 и присваиваем c получившееся значение
alert(c);       //ответ: 5
                // a = 3, b = 2, c = 5, d = 1

//пример 4
d = 2 + b++;    // Т.к. инкремент постфиксный, то сначала прибавляем к 2 значение b и присваиваем результат d, а затем увеличиваем b на 1
alert(d);       //ответ: 4
alert(a);       //3
alert(b);       //3
                // a = 3, b = 3, c = 5, d = 4