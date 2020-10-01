const marks = [80, 80, 50];

console.log(calculateGrade(marks));
function calculateGrade(marks){
    let summary = 0;
    for(let key of marks){let a = marks.length;
        summary += key;
        average = summary/a;
    }
    let mark; 
    
    switch (true){
        case (average >= 1 && average <= 59): mark = 'F'; break; 
        case (average >= 60 && average <= 69): mark = 'D'; break; 
        case (average >= 70 && average <= 79): mark = 'C'; break; 
        case (average >= 80 && average <= 89): mark = 'B'; break; 
        default: mark = 'A';
    }

    return mark;
}