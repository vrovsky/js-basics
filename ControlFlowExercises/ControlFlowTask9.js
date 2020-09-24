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