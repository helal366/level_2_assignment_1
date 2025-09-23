"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    const filterByRating = (itemList) => {
        const itemListWithMinRating = [];
        for (let i of itemList) {
            if (i.rating >= 4) {
                itemListWithMinRating.push(i);
            }
        }
        return itemListWithMinRating;
    };
    console.log(filterByRating(books));
    // using filter() function
    const ratingFilter = (itemList) => {
        const result = itemList.filter((item) => item.rating >= 4.0);
        return result;
    };
    console.log(ratingFilter(books));
    // 
}
//# sourceMappingURL=2_problemTwo.js.map