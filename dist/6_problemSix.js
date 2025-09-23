"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const products = [
        { name: 'Pen', price: 10 },
        { name: 'NoteBook', price: 50 },
        { name: 'Bag', price: 600 },
        { name: 'Rubber', price: 20 },
        { name: 'Pencil', price: 30 },
        { name: 'Cutter', price: 25 }
    ];
    const getMostExpensiveProduct = (products) => {
        if (products.length === 0) {
            return null;
        }
        let maxPrice = { name: '', price: 0 };
        for (let product of products) {
            if (product.price >= maxPrice.price) {
                maxPrice = product;
            }
        }
        return maxPrice;
    };
    console.log(getMostExpensiveProduct(products));
    // 
}
//# sourceMappingURL=6_problemSix.js.map