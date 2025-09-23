{
    // 
    const processValue=(value: string|number):number=>{
        if(typeof value==='string'){
            return value.length;
        }else{
            return value*2;
        };
    }
    console.log(processValue('The shephard boy felt lonely and dull.'))
    console.log(processValue(10))
    // 
}