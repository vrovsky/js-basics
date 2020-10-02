const numbers = [1, 2, 3, 4, 1, 1];
const count = countOccurrences(numbers, 1);
console.log(count);

function  countOccurrences(array, searchElement) {
    // counter = 0;
    // array.forEach(element => {
    //     if(searchElement == element)
    //     counter++;
    //     });
    //     return counter;

    const sum = array.reduce((counter, currentValue) => {
        if (currentValue == searchElement){
            counter++
        }
        return counter;
    });
    return sum;
    }