// Exercise #1
function maxOfTwo(a, b){
    // return ( a > b ) ? a : b;
    if (a > b) console.log(a + ' is bigger');
    console.log(b + ' is bigger')
}
maxOfTwo(6, 8);

// Exercise #2
function isLandscape(width, height){
    return width > height;
}
console.log(isLandscape(800,600));

// Exercise #3
function fizzBuzz(input){
    if (typeof input !== 'number') 
        return NaN;
    else if(input % 3 === 0 && input % 5 === 0)
        return('FizzBuzz');
    else if(input % 5 === 0)
        return('Buzz');
    else if(input % 3 === 0)
        return('Fizz');
    else
        return(input);
    
}
console.log(fizzBuzz('asdsadasd'));

// Exercise #4
checkSpeed(120);
function checkSpeed(speed){
    if (speed <= 70) console.log('Ok');
    else if(speed > 70) {
        let points = (speed - 70)/5;
        (Math.floor(points) === 0)? console.log('Ok'):
        console.log(Math.floor(points));
        if (Math.floor(points) > 12){
            console.log('License suspended');
        }
    }
}

// Exercise #5
let limit = 0;
showNumbers(10);
function showNumbers(limit){
    for (let i = 0; i <= limit;){
         limit % 2 == 0 ? console.log(limit, '"EVEN"') :
         console.log(limit, '"ODD"');
        limit--;
    }
}

// Exercise #6

const array = [0, null, 1, 2, 3, undefined];
function countTruthy(array){
    let counter = 0;
    for(let truthyCount of array){
        if (truthyCount) counter++;
    }
    return counter;
} 
console.log(countTruthy(array));

// Exercise #7
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
function showProperties(obj){
    for(let key in obj){
        if (typeof(obj[key]) == 'string')
            console.log(key, obj[key]);
    }
}
showProperties(movie);

// Exercise #8
console.log(sum(10));

function sum(limit){
    let summary = 0;
    for(let i = 0; i <= limit; i++){
        if(i % 3 == 0) summary += i;
    }
    for(let j = 0; j <= limit; j++){
        if(j % 5 == 0) summary +=j;
    }
    return summary;
}

// Exercise #9
const marks = [80, 80, 50];

console.log(calculateGrade(marks));
function calculateGrade(marks){
    let summary = 0;
    for(let key of marks){let a = marks.length;
        summary += key;
        average = summary/a;
    }
    let mark; 
    if (average >= 1 && average <= 59) mark = 'F';
    else if(average >= 60 && average <= 69) mark = 'D';
    else if(average >= 70 && average <= 79) mark = 'C';
    else if(average >= 80 && average <= 89) mark = 'B';
    else mark = 'A';
    return mark;
}

// Exercise #10
showStars(10);
function showStars(rows){
    let stars = '';
    for(let i = 1; i <= rows; i++){
        stars += '*';
        console.log(stars);
    }
}