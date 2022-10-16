// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
// Sum of Numbers at Even Places = 2 + 4 = 6
// Difference = 9 - 6 = 3
// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3

const array = [1, 2, 3, 4, 5]
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b)
}
function program1(array) {
    let sumOdd = 0;
    let sumEven = 0;
    let oddElements = 0;
    let evenElements = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        if (i % 2 === 0) {
            sumOdd += array[i]
            oddElements++;
        } else {
            sumEven += array[i]
            evenElements++;
        }
    }
    let difference = Math.abs(sumOdd - sumEven)
    let average = sum / array.length

    let result = {
        "sumOdd": sumOdd,
        "sumEven": sumEven,
        "difference": difference,
        "oddElements": oddElements,
        "evenElements": evenElements,
        "average": average,
        "gcd": gcd(sumOdd, sumEven)
    }

    return result;

}
console.log(program1(array))


// 2. Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.

// Sample Input 1:
// [ 1, 2, 3, 4, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:
// 4 in both arrays

// Sample Input 2:
// [ 1, 2, 3, 6, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:
// 4 in array 2

// Sample Input 3:
// [ 1, 2, 3, 4, 5 ]
// [ 5, 6, 1, 8, 2 ]
// Output:
// 4 in array 1


function checkArray(arr1, arr2) {
    let r1;
    let r2;
    arr1.map(val => {
        if (val === 4) {
            r1 = true
        }
    })
    arr2.map(val => {
        if (val === 4) {
            r2 = true
        }
    })
    if (r1 && r2) {
        return "4 in both arrays."
    }
    else if (r1) {
        return "4 in array 1."
    }
    else if (r2) {
        return "4 in array 2."
    }
    else {
        return "4 is not present in any array."
    }
}

console.log(checkArray([1, 2, 3, 4, 5], [6, 1, 8, 2]))


// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();

// Sample Input:
// [ 1, 2, [ 3, 4, [ 5 ] ] ]
// Output:
// [ 1, 2, 3, 4, 5 ]

let ar = [1, 2, [3, 4, [5]]]
let a = [].concat.apply([], ar)
let ans = [].concat.apply([], a)

console.log(ans)

// 4. Write a JavaScript program to take an array as input from the user and:
//  a) Store all duplicate elements in a separate array
//  b) Remove the duplicate elements from the original array

// Sample Input:
// [ 1, 2, 3, 2, 3, 4, 5 ]
// Output:
// Duplicate Elements = [ 2, 3 ]
// Array without duplicate elements = [ 1, 2, 3, 4, 5 ]

function program4(array) {
    let res = array.filter((val, index) => {
        return array.indexOf(val) !== index;
    })
    let ans = [...new Set(array)]
    let result = {
        "Duplicate elements": res,
        "Array without duplicate elements": ans
    }
    return result
}

console.log(program4([1, 2, 3, 2, 3, 4, 5]))


// 5. Debug the given JavaScript program and execute the correct code.

// function thirdLargest(arr, arr_size) {
//     /* There should be
//     at least three elements */
//     if (arr_size < 3) {
//         document.write(" Invalid Input ");
//         return;
//     }
//     let first = arr[0];
//     for (let i = 1;
//         i < arr_size; i++)
//         if (arr[i] > first)
//             arr[i] = first;
//     let second = Number.MIN_VALUE; for (let i = 0;
//         i < arr_size; i++)
//         if (arr[i] > first &&
//             arr[i] < second)
//             arr[i] = second;
//     let third = Number.MIN_VALUE; for (let i = 0;
//         i < arr_size; i++)
//         if (arr[i] < third &&
//             arr[i] > second)
//             third = arr[i];
//     document.write("The third Largest " + "element is ", third);
// }
let arr = [12, 13, 1, 10, 34, 16]; let n = arr.length;
// thirdLargest(arr, n);


function thirdLargest2(arr, arr_size) {
    /* There should be
    at least three elements */
    if (arr_size < 3) {
        return "Invalid input"
    }
    let first = arr[0];
    for (let i = 1; i < arr_size; i++) {
        if (arr[i] > first) {
            first = arr[i];
        }
    }
    let second = Number.MIN_VALUE;
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] < first && arr[i] > second) {
            second = arr[i];
        }
    }
    let third = Number.MIN_VALUE;
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] < second && arr[i] > third) {
            third = arr[i];
        }
    }
    return "The third Largest " + "element is ", third;
}

console.log(thirdLargest2(arr, n))