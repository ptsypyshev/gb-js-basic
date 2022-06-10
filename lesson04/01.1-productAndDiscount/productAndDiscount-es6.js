'use strict';

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

let product2 = new Product("Coca-Cola", 110);
product2.make25PercentDiscount()
product2.show();