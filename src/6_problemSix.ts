{
    // 
    interface Product {
        name: string;
        price: number;
    }

    const products:Product[]=[
        {name:'Pen', price:10},
        {name: 'NoteBook', price: 50},
        {name: 'Bag', price: 600},
        {name: 'Rubber', price: 20},
        {name: 'Pencil', price: 30},
        {name: 'Cutter', price: 25}
    ]
    const getMostExpensiveProduct=(products:Product[])=>{
        let maxPrice=0;
        for(let product of products){
            if(product['price']>=maxPrice) maxPrice=product['price']
        }
        const result=products.filter((p)=>p.price===maxPrice);
        return result
    }
    console.log(getMostExpensiveProduct(products))
    // 
}