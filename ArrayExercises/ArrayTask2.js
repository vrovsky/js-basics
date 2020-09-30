const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement){
    for(let n of array){
        array[n] === searchElement;
    }
}