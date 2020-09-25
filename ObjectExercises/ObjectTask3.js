function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
let addressOfMinsk1 = new Address('Pushkina', 'Minsk', 220015);
let addressOfMinsk2 = new Address('Pushkina', 'Minsk', 220015);


function areEqual(address1, address2){
    //return address1.street === address2.street && 
    //address1.city === address2.city &&
    //address1.zipCode === address2.zipCode; 
    let array1 = Object.keys(address1);
    let array2 = Object.keys(address2);
    for(i = 0; i < array1.length; i++){
        if (array1[i] === array2[i]) console.log('true');
        else console.log('false');
    }
}
areEqual(addressOfMinsk1, addressOfMinsk2);

function areSame(address1,address2){
    return address1 === address2;
}

console.log(areSame(addressOfMinsk1,addressOfMinsk2));