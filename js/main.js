var studentsScore = [10, 15 , 20 ,25];
console.log(studentsScore);

var index = 0;
while (index <= 3) {
    console.log(studentsScore[index]);
    studentsScore[index] = studentsScore [index] + 3;
    index = index + 1;
}

console.log(studentsScore);
