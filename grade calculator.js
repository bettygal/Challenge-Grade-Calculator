var gradeCalculator = function(score)  
{
    var mark = 85;
    var letterGrade = '';

    if (mark > 70 ) { 
        letterGrade = 'A'
    } else if (mark > 50 ) { 
        letterGrade = 'C'
    } else {letterGrade = 'F'};
    return'You got grade' + ' ' + letterGrade;
}

var result = gradeCalculator(85);
console.log(result);