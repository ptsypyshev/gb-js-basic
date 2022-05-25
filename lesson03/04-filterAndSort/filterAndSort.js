'use strict';

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

let productsFilteredByPhotos = products.filter(function (product) {
    return product.photos != null && product.photos.length > 0;
});

let productsSortedByPrice = products;
productsSortedByPrice.sort(function(a, b) {
    return a.price - b.price;
});

console.log(productsFilteredByPhotos);
console.log(productsSortedByPrice);