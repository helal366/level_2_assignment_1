var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // 
    var formatString = function (input, toUpper) {
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
    var books = [
        { title: 'Book A', rating: 4.5 },
        { title: 'Book B', rating: 4.8 },
        { title: 'Book C', rating: 3.5 },
        { title: 'Book D', rating: 2.9 },
        { title: 'Book E', rating: 3.7 },
        { title: 'Book F', rating: 4.1 },
    ];
    // using for of
    var filterByRating = function (items) {
        var itemListWithMinRating = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            if (i.rating >= 4) {
                itemListWithMinRating.push(i);
            }
        }
        return itemListWithMinRating;
    };
    console.log(filterByRating(books));
    // using filter() function
    var ratingFilter = function (items) {
        var result = items.filter(function (item) { return item.rating >= 4.0; });
        return result;
    };
    console.log(ratingFilter(books));
    // 
}
{
    //
    var concatenateArrays = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
            var arr = arrays_1[_a];
            result.push.apply(result, arr);
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
    var Vehicle = /** @class */ (function () {
        function Vehicle(make, year) {
            this.make = make;
            this.year = year;
        }
        // getter
        Vehicle.prototype.getInfo = function () {
            console.log("Make: ".concat(this.make, ", Year: ").concat(this.year));
        };
        return Vehicle;
    }());
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(make, year, model) {
            var _this = _super.call(this, make, year) || this;
            _this.model = model;
            return _this;
        }
        Car.prototype.getModel = function () {
            console.log("Model: ".concat(this.model));
        };
        return Car;
    }(Vehicle));
    var myCar = new Car('Toyota', 2020, 'Corolla');
    myCar.getInfo();
    myCar.getModel();
    // 
}
{
    // 
    var processValue = function (value) {
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
    var products = [
        { name: 'Pen', price: 10 },
        { name: 'NoteBook', price: 50 },
        { name: 'Bag', price: 600 },
        { name: 'Rubber', price: 20 },
        { name: 'Pencil', price: 30 },
        { name: 'Cutter', price: 25 }
    ];
    var getMostExpensiveProduct = function (products) {
        if (products.length === 0) {
            return null;
        }
        var maxPrice = { name: '', price: 0 };
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
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
    var Day = void 0;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    var getDayType = function (day) {
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
    var squareAsync = function (n) {
        return new Promise(function (resolve, reject) {
            if (n >= 0) {
                setTimeout(function () {
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
