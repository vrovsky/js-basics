//Factory function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}
let address = createAddress('Pushkina', 'Minsk', 220015);

//Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
let addressOfMinsk = new Address('Pushkina', 'Minsk', 220015);