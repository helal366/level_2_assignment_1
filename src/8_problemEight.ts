{
    // 
    const squareAsync=(n:number):Promise<number>=>{
        
        return new Promise<number>((resolve,reject)=>{
            if(n>=0){

                setTimeout(()=>{
                    resolve(n*n)
                },1000)
            }else{
                reject('Error: Negative number not allowed')
            }
            
        })
    }

    squareAsync(10).then(console.log);
    squareAsync(-3).catch(console.error)
    // 
}