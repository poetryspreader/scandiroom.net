// * RECURSION

// function pow(x,n){
//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

// console.log(pow(2,1));

// function pow2(x,n){
//     if(n === 1){
//         return 1;
//     } else {
//         return x * pow(x, n-1);
//     }
// }
// console.log(pow2(2,5));

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

// function getTotalProgressByIteration(data){
//     let total = 0;
//     let students = 0;

//     for(let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for(let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for(let subCourse of Object.values(course)) {
//                 students += subCourse.length;
//                 for(let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
//     return total / students;
// }
// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for(let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total,data.length]; 
    } else {
        let total = [0,0];
        
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);


// function thirdTask(){
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for(let i = 0; i < data.length; i++){
//         result[i] = data[data.length-i-1];
//     }
//     console.log(result);
// }
// thirdTask();

const lines = 5;
let final = '';
for(let i = 0; i <= lines; i++){

    for(let j = 0; j < lines - i;j++){
        final += ' ';
    }
    for(let j = 0;j < j + i + 1;j++){
        final += '*';
    }
    final += '\n';
}

