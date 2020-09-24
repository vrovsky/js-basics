let limit = 0;
showNumbers(10);
function showNumbers(limit){
    for (let i = 0; i <= limit;){
         limit % 2 == 0 ? console.log(limit, '"EVEN"') :
         console.log(limit, '"ODD"');
        limit--;
    }
}