{
    //Solution of Problem Three 
    const concatenateArrays=<T>(...arrays:T[][]):T[]=>{
        const result:T[]=[];
       for(const arr of arrays){
        result.push(...arr)
       }
       return result
    };
    console.log(concatenateArrays([2,5],[4,6],[5,3,6]))
    console.log(concatenateArrays([7,2],[2,6, 5],[4,8,9]))
    console.log(concatenateArrays(['d','f'],['g','s', 't']))
    
    // 
}