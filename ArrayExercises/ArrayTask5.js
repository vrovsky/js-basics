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

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
      }, 0);
    }