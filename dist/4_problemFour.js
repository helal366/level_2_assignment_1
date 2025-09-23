"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Solution of Problem Four
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
//# sourceMappingURL=4_problemFour.js.map