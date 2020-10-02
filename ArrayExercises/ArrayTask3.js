const numbers = [1, 2, 3, 4];

function except(array, excluded) {
    const filtered = array.filter(value => value !== excluded)
    return filtered;
}

const output = except(numbers, 1);
console.log(output);