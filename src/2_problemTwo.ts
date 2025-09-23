{
    // 
    type Item={
        title:string;
        rating: number
    };
    const books:Item[]=[
        {title: 'Book A', rating: 4.5},
        {title: 'Book B', rating: 4.8},
        {title: 'Book C', rating: 3.5},
        {title: 'Book D', rating: 2.9},
        {title: 'Book E', rating: 3.7},
        {title: 'Book F', rating: 4.1},
    ];
    
    // using for of
    const filterByRating=(itemList:Item[]):Item[]=>{
        const itemListWithMinRating=[];
        for(let i of itemList){
            if(i.rating>=4){
                itemListWithMinRating.push(i);
            }
        }
        return itemListWithMinRating
    }
    console.log(filterByRating(books))

    // using filter() function
    const ratingFilter=(itemList:Item[])=>{
        const result=itemList.filter((item)=>item.rating>=4.0);
        return result
    }
    console.log(ratingFilter(books))
    // 
}