const address = {
    street: 'Pushkina',
    city:'Minsk',
    zipCode: 220015
};

function showAddres(address){
        for(let key in address){
            console.log(key, address[key]);
         }
}
showAddres(address);