"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //Solution of Problem Three 
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
//# sourceMappingURL=3_problemThree.js.map