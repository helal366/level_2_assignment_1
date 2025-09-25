"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // 
    const formatString = (input, toUpper) => {
        if (toUpper === false) {
            return input.toLowerCase();
        }
        return input.toUpperCase();
    };
    console.log(formatString('Hello'));
    console.log(formatString('Hello', true));
    console.log(formatString('Hello', false));
    // 
}
{
    const books = [
        { title: 'Book A', rating: 4.5 },
        { title: 'Book B', rating: 4.8 },
        { title: 'Book C', rating: 3.5 },
        { title: 'Book D', rating: 2.9 },
        { title: 'Book E', rating: 3.7 },
        { title: 'Book F', rating: 4.1 },
    ];
    // using for of
    const filterByRating = (items) => {
        const itemListWithMinRating = [];
        for (let i of items) {
            if (i.rating >= 4) {
                itemListWithMinRating.push(i);
            }
        }
        return itemListWithMinRating;
    };
    console.log(filterByRating(books));
    // using filter() function
    const ratingFilter = (items) => {
        const result = items.filter((item) => item.rating >= 4.0);
        return result;
    };
    console.log(ratingFilter(books));
    // 
}
{
    //
    const concatenateArrays = (...arrays) => {
        const result = [];
        for (const arr of arrays) {
            result.push(...arr);
        }
        return result;
    };
    console.log(concatenateArrays([2, 5], [4, 6], [5, 3, 6]));
    console.log(concatenateArrays([7, 2], [2, 6, 5], [4, 8, 9]));
    console.log(concatenateArrays(['d', 'f'], ['g', 's', 't']));
    // 
}
{
    // 
    class Vehicle {
        make;
        year;
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        // getter
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        model;
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    const myCar = new Car('Toyota', 2020, 'Corolla');
    myCar.getInfo();
    myCar.getModel();
    // 
}
{
    // 
    const processValue = (value) => {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            return value * 2;
        }
        ;
    };
    console.log(processValue('The shephard boy felt lonely and dull.'));
    console.log(processValue(10));
    // 
}
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
{
    //
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    const getDayType = (day) => {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    };
    console.log(getDayType(Day.Friday));
    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Wednesday));
    console.log(getDayType(Day.Sunday));
    console.log(getDayType(Day.Saturday));
    //to get log: ts-node src/7_problemSeven.ts
}
{
    // 
    const squareAsync = (n) => {
        return new Promise((resolve, reject) => {
            if (n >= 0) {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
            else {
                reject('Error: Negative number not allowed');
            }
        });
    };
    squareAsync(10).then(console.log);
    squareAsync(-3).catch(console.error);
    // 
}
//# sourceMappingURL=problems.js.map