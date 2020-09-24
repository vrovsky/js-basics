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
