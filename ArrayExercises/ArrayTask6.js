const numbers = [1, 4, 3, 2];
const max = getMax(numbers);
console.log(max);
function getMax(array) {
    // array.sort();
    // array.reverse();
    // const max = array[0];
    // return max;
    const max = numbers.reduce((accumulator, currentValue) => {
        if(currentValue > accumulator)
            return currentValue;
        return accumulator;
    });
    return max;
}