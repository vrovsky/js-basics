const array = [0, null, 1, 2, 3, undefined];
function countTruthy(array){
    let counter = 0;
    for(let truthyCount of array){
        if (truthyCount) counter++;
    }
    return counter;
} 
console.log(countTruthy(array));