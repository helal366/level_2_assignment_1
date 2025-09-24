{
    // 
    const formatString = (param1:string, param2?: boolean):string=>{
        if(param2===false){
            return param1.toLowerCase()
        }
        return param1.toUpperCase()
    }
    console.log(formatString('The hungry fox is wandering through the forest in search of food.')) 
    console.log(formatString('Suddenly he saw a vineyard with brunches full of bunches fresh, juicy and purple grapes.', true)) 
    console.log(formatString('The fox went there and thought, "If i can eat the grapes, my hunger will go away."', false)) 
    // 
}