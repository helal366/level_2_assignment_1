"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Solution of Problem 1:
    const formatString = (param1, param2) => {
        if (param2 === true) {
            return param1.toUpperCase();
        }
        else if (param2 === false) {
            return param1.toLowerCase();
        }
        else {
            return param1.toUpperCase();
        }
    };
    console.log(formatString('The hungry fox is wandering through the forest in search of food.'));
    console.log(formatString('Suddenly he saw a vineyard with brunches full of bunches fresh, juicy and purple grapes.', true));
    console.log(formatString('The fox went there and thought, "If i can eat the grapes, my hunger will go away."', false));
    // 
}
//# sourceMappingURL=1_problemOne.js.map