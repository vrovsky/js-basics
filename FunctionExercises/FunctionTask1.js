function sum(a){
    let total = 0;
    if (Array.isArray(a)){
        for(let value of a){
            total +=value;
        }
    }else 
    for(let value of arguments){
        total += value;
        }

    return total;
}

console.log(sum([1,2,3,4,5,6]));