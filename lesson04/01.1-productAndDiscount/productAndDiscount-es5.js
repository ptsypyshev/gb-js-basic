'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    console.log(`Try to make 25% discount to product ${this.name} with price ${this.price}.`)
    this.price -= this.price*0.25
};

Product.prototype.show = function() {
    console.log(`Product ${this.name} has price ${this.price}.`)
};

let product1 = new Product("Pepsi", 100);
product1.make25PercentDiscount()
product1.show();