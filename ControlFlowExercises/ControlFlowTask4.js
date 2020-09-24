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