// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.

let answer1 = `A function passed as an argument inside another function is 
called a callback function whereas the function inside which the 
callback function is passed is called higher order function.`


setTimeout(function b() {
    //setTimeout is a higher order function and b is a callback function
    console.log("This will log after 1 sec")
}, 1000);


// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

let arr = [1, 3, 2, 5, 6, 7, 7]

let result = arr.filter(val => {
    return val < 5
})

console.log(result)

let answer2 = `Yes, filter is a higher order function because it takes another function
as an argument.`

// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

setTimeout(function b() {
    //setTimeout is a higher order function and b is a callback function
    console.log("This will log after 3 sec")
}, 3000);


// 4. Carefully check the example below:
//  a) What will be the output of this program ?
//  b) Which function is a Higher Order function here ?

// const names = ['John', 'Tina', 'Kale', 'Max']
// function useFunction(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }
// function argFn(name) {
//     console.log("Hello " + name);
// }
// useFunction(names, argFn);

let answer4a = `Output of the program will be:
Hello John
Hello Tina 
Hello Kale
Hello Max
`

let answer4b = `useFunction is the higher order function & argFn is callback function.`