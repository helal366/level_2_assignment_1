"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Solution of Problem five
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
//# sourceMappingURL=5_problemFive.js.map