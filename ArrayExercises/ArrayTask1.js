const numbers = arrayFromRange(-2, 2);
console.log(numbers);

function arrayFromRange(min, max){
    const output = [];
    for(min; min <= max; min++)
    output.push(min);
    return output;
};