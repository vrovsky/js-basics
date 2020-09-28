// const numbers = [3, 4, 3];
// //End
// numbers.push(5, 6);
// //Beggining
// numbers.unshift(1, 2); 
// //Middle
// numbers.splice(2, 0, 'a', 'b');

// const numbers = [1, 2, 3, 4, 5, 6, 7, 3]; 
// console.log(numbers.indexOf(3));
// console.log(numbers.includes(1));

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];
// // const course = courses.findIndex(function(course){
// //     return course.name === 'a';
// // });
// const course = courses.find(course => course.name === 'a');
// console.log(course);

// const numbers = [1, 2, 3, 4];
// while(numbers.length > 0) numbers.pop();
// console.log(numbers);

// const first = [1, 2, 3];
// const second = [1, 2, 3];
// const combined = first.concat(second);
// // for(let number in combined){console.log(number);}
// combined.forEach(function(number){console.log(number);});
// combined.forEach(number => console.log(number));

// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);
// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);
// const combined = parts.join('-');
// console.log(combined);

// const arrayOfObjects = [
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'javaScript'}
// ]
// arrayOfObjects.sort(function(a,b){
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if (nameA < name) return -1;
//     if (nameA > name) return 1;
//     else return 0;

// });
// console.log(arrayOfObjects); 

// const numbers = [1, 2, 3];
// let allPositive = numbers.every(function(value){
//     return value >= 0;
// });
// console.log(allPositive);

const numbers = [1, 2, -1, 3];
const filtered = numbers.filter(value => value >= 0
)
console.log(filtered);