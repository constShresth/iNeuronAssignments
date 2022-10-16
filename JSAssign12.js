// 1. Write a JavaScript program to map Employee Records according to
//    Employee IDs.
//    Employee: { id, name, salary }
//   a) Print an array of all employee ids
//   b) Print count of employees
//   c) Print the name of the employee according to their id { key: value }
//   d) Store the salaries of all employees in an array
//   e) Calculate the average salary the company is paying to its employees

// Sample Input:
//   "id": [ 67, 48, 29 ]
//   "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
//   "salary": [ 75000, 82000, 98000 ]
// Output:
//   [ 67, 48, 29 ]
//   3
//   67: Hitanshu
//   48: Ninad
//   29: Amandeep
//   [ 75000, 82000, 98000 ]
//   85000

let Employee = {
    "id": [67, 48, 29],
    "name": ["Hitanshu", "Ninad", "Amandeep"],
    "salary": [75000, 82000, 98000]
}

function employee(data) {
    let { id, name, salary } = data;
    let c = {}
    for (let i = 0; i < id.length; i++) {
        c[id[i]] = name[i]
    }
    let sum = salary.reduce((acc, curr) => acc + curr)
    let average = sum / salary.length
    let result = {
        a: id,
        b: id.length,
        c: c,
        d: salary,
        e: average
    }
    return result;
}
console.log(employee(Employee))


// 2. Write a program in JavaScript to map the student ids, names and scores.
//   a) Add data for 3 students (use map functions)
//   b) Get Student Names using map functions
//   c) Delete Student Scores using map functions

//   d) Display 1 parameter (only value), 2 parameters (value + key), and 3
//      parameters (value + key + map) for the student

// Sample Input:
//   "id": [ 1, 2, 3 ]
//   "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
//   "scores": [ 90, 88, 92 ]

// Output:
//   [ 'Hitanshu', 'Ninad', 'Amandeep' ]

// -----one parameter-----
//   [ 1, 2, 3 ]
//   [ 'Hitanshu', 'Ninad', 'Amandeep' ]
//   [ 90, 88, 92 ]
// -----two parameter-----
//   id 1, 2, 3
//   name Hitanshu,Ninad,Amandeep
//   scores 90,88,92
// -----three parameter-----
//   id 1, 2, 3
// Map(3) {
//   'id' => [ 67, 48, 29 ],
//   'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// '  scores' => [ 90, 88, 92 ]
// }

// name Hitanshu,Ninad,Amandeep

// Map(3) {
//   'id' => [ 1, 2, 3 ],
//   'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
//   'scores' => [ 90, 88, 92 ]
// }

// scores 90,88,92

// Map(3) {
//   'id' => [ 1, 2, 3 ],
//   'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
//   'scores' => [ 90, 88, 92 ]
// }

let Students = {
    "id": [1, 2, 3],
    "name": ['Hitanshu', 'Ninad', 'Amandeep'],
    "scores": [90, 88, 92]
}

function student(data) {
    const { id, name, scores } = data;
    const myMap = new Map();
    myMap.set("id", id)
    myMap.set("name", name)
    myMap.set("scores", scores)

    for (let [key, value] of myMap) {
        if (key === "name") {
            console.log(value)
        }
    }


    console.log("-----one parameter-----")
    for (let value of myMap.values()) {
        console.log(value)
    }
    console.log("-----two parameter-----")
    for (let [key, value] of myMap) {
        console.log(key, value)
    }
    console.log("-----three parameter-----")
    for (let [key, value] of myMap) {
        console.log(key, value)
        console.log(myMap)
    }

    myMap.delete("scores");
    console.log("\nMap after deleting the scores")
    return myMap;

}

console.log(student(Students))





// 3. Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.

// Sample Input:
//   [ 1, 2, 3, 4, 5 ]
// Explanation:
//   Original Array = [ 1, 2, 3, 4, 5 ]
//   New Array = [ 1, 4, 9, 16, 25 ]
//   Mapping = squares => [ 1, 4, 9, 16, 25 ]
// Output:
//   [ 1, 4, 9, 16, 25 ]


function square(arr) {
    let result = arr.map(val => val ** 2)
    return result;
}

console.log(square([1, 2, 3, 4, 5]))

