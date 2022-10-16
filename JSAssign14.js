// 1. Write a JavaScript program to:
//   a) filter employees according to department = IT
//   b) filter employees who earn a salary < 65000
//   Sample Input:
let employees = [
    {
        "id": 1,
        "name": "Abhinav",
        "department": "IT",
        "Salary": 75000
    },
    {
        "id": 2,
        "name": "Gaurav",
        "department": "Sales",
        "Salary": 52000
    },
    {
        "id": 3,
        "name": "Raj",
        "department": "IT",
        "Salary": 64000
    }]
// Output:
// [
//     {
//         "id": 1,
//         "name": "Abhinav",
//         "department": "IT",
//         "Salary": 75000
//     },
//     {

//         "id": 3,
//         "name": "Raj",
//         "department": "IT",
//         "Salary": 64000
//     }
// ]

// [
//     {
//         "id": 2,
//         "name": "Gaurav",
//         "department": "Sales",
//         "Salary": 52000
//     },
//     {
//         "id": 3,
//         "name": "Raj",
//         "department": "IT",
//         "Salary": 64000
//     }
// ]

function prog1(arr) {
    let a = arr.filter(val => {
        return val.department === "IT"
    })
    let b = arr.filter(val => {
        return val.Salary < 65000;
    })

    return [a, b]
}

console.log(prog1(employees))


// 2. Write a JavaScript program to filter the hospitals according to:
//   a) Number of Beds > 200
//   b) Availability of Beds = Yes
//   c) Location = Pune

//   Sample Input:
let hospitals = [
    {
        "id": 1,
        "name": "Hospital A",
        "location": "Delhi",
        "noOfBeds": 450,
        "availability": "Yes"
    },
    {
        "id": 2,
        "name": "Hospital B",

        "location": "Pune",
        "noOfBeds": 150,
        "availability": "No"
    },
    {
        "id": 3,
        "name": "Hospital C",
        "location": "Pune",
        "noOfBeds": 350,
        "availability": "Yes"
    }]
//   Output:
// [
//     {
//         "id": 1,
//         "name": "Hospital A",
//         "location": "Delhi",
//         "noOfBeds": 450,
//         availability: Yes
//     },
//     {
//         "id": 3,
//         "name": "Hospital C",
//         "location": "Pune",
//         "noOfBeds": 350,
//         availability: Yes
//     }
// ]

// [
//     {
//         "id": 1,
//         "name": "Hospital A",
//         "location": "Delhi",

//         "noOfBeds": 450,
//         "availability": "Yes"
//     },
//     {
//         "id": 3,
//         "name": "Hospital C",
//         "location": "Pune",
//         "noOfBeds": 350,
//         "availability": "Yes"
//     }
// ]

// [
//     {
//         "id": 2,
//         "name": "Hospital B",
//         "location": "Pune",
//         "noOfBeds": 150,
//         "availability": "No"
//     },
//     {
//         "id": 3,
//         "name": "Hospital C",
//         "location": "Pune",
//         "noOfBeds": 350,
//         "availability": "Yes"
//     }
// ]

function prog2(arr) {
    let a = arr.filter(val => {
        return val.noOfBeds > 200;
    })
    let b = arr.filter(val => {
        return val.availability === "Yes";
    })
    let c = arr.filter(val => {
        return val.location === "Pune";
    })

    return [a, b, c]
}

console.log(prog2(hospitals))