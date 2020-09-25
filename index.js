// function Human(age){
//     this.age = age;
//     this.laught = function(){
//         console.log('LoL');
//     }
// }

// let human = new Human(16);

// function Man(breathe){
//     return{
//         lungs: breathe
//     }
// }

// const man = Man(1);

// for(let key of Object.keys(man)){
//     console.log(key, man[key]);
// }

// if ('lungs' in man) console.log('Yes');

// let another = { ...man};

// name = 'John'; 
// let another1 = `This is ${name},
// 'first' message`;

// const date = new Date();


function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}
let address = createAddress('Pushkina', 'Minsk', 220015);
for(let key in address){
    console.log(key, address[key]);
}