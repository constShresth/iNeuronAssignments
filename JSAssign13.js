// 1. Write a JavaScript program to get an array from the user and return the:
//   a) Sum of all elements in the array using reduce()
//   b) Average of all elements in the array using reduce()
// Sample Input:
//   [ 1, 2, 3, 4, 5 ]
// Output:
//   15
//   3

function program1(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr)
    let avg = sum / arr.length;
    return {
        "sum": sum,
        "average": avg
    }
}

console.log(program1([1, 2, 3, 4, 5]))


// 2. Write a JavaScript program to
//   a) Calculate grades on basis of marks
//      >90 = A
//      >80 = B
//      >70 = C
//      >60 = D
//      >50 = E
//      else = F
//   b) Map the grades of each student
//   c) Group students according to the grades they have received and display.
//   Sample Input:
let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95" },
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
];
//   Output:

//      {
//      'A': [ { name: "John", grade: “A” }, { name: "Dwight", grade: “A” } ],
//      'B': [ { name: "Oliver", grade: “B” } ],
//      'C': [ { name: "Michael", grade: “C” } ],
//      'D': [ { name: "Oscar", grade: “D” } ],
//      'E': [ ],
//      'F': [ { name: "Kevin", grade: “F” } ],
//      }

function program2(arr) {

    let r = arr.reduce((acc, curr) => {
        switch (true) {
            case curr.marks > 90:
                acc.push({
                    name: curr.name,
                    grade: "A"
                })
                break;
            case curr.marks > 80:
                acc.push({
                    name: curr.name,
                    grade: "B"
                })
                break;
            case curr.marks > 70:
                acc.push({
                    name: curr.name,
                    grade: "C"
                })
                break;
            case curr.marks > 60:
                acc.push({
                    name: curr.name,
                    grade: "D"
                })
                break;
            case curr.marks > 50:
                acc.push({
                    name: curr.name,
                    grade: "E"
                })
                break;
            default:
                acc.push({
                    name: curr.name,
                    grade: "F"
                })
                break;
        }
        return acc;
    }, [])



    return {
        "A": r.filter(val => val.grade === "A"),
        "B": r.filter(val => val.grade === "B"),
        "C": r.filter(val => val.grade === "C"),
        "D": r.filter(val => val.grade === "D"),
        "E": r.filter(val => val.grade === "E"),
        "F": r.filter(val => val.grade === "F")
    }
}

console.log(program2(students))