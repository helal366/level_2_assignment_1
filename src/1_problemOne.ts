{
    // 
    const one = (param1:string, param2?: boolean)=>{
        if(param2===true){
            return param1.toUpperCase()
        }else if(param2===false){
            return param1.toLowerCase()
        }else{
            return param1.toUpperCase()
        }
    }
    console.log(one('The hungry fox is wandering through the forest in search of food.')) 
    console.log(one('Suddenly he saw a vineyard with brunches full of bunches fresh, juicy and purple grapes.', true)) 
    console.log(one('The fox went there and thought, "If i can eat the grapes, my hunger will go away."', false)) 
    // 
}