// 1. Input a String S, and check its length and if the length is greater than 4,
//    truncate the input String and output the result -
//    Input: Ice Output: Ice
//    Input:Icecream Output:Icec...

function checkString(str) {
    if (str.length > 4) {
        return str.substring(0, 4) + "..."
    }
    else {
        return str
    }
}

console.log(checkString("Icecream"));


// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

function removeSpace(str) {
    str = str.split(" ").join("");
    return str;
}

console.log(removeSpace("Hii Boy"))


// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”

function reverse(str) {
    str = str.split(" ").reverse().join(" ");
    return str;
}

console.log(reverse("Boy Hii"))


// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
//     Input: “apple” Output: “xpple”

function replaceA(str) {
    str = str.toLowerCase().split("");
    let result = str.reduce((acc, curr) => {
        if (curr === "a") {
            acc.push("x")
        } else {
            acc.push(curr)
        }
        return acc;
    }, [])

    return result.join("")
}

console.log(replaceA("apple"))


// 5. What string method can be used to convert string into array ?
function strToArray(str) {
    return str.split("")
}

console.log(strToArray("Convert string to array"))


// 6. What string method can be used to check the occurrence of a specified
// text in a string ?

function checkOccurence(text, str) {
    str = str.split(" ");
    let result;
    str.map(val => {
        if (val === text) {
            result = "Yes, text is there in the string";
        }
    })
    return result;
}

console.log(checkOccurence("hello", "hello world"))


// 7. How can you break a string to a newline in Javascript ?

let str = "This is a \n newline."

console.log(str)


// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.

function checkCharacter(str) {
    if (str[0].toLowerCase() === str[0]) {
        return "Yes, the first character of the string is lowercase."
    }
}

console.log(checkCharacter("shresth"))


// 9. Give a correct verdict to users input if he enters "yes", "YES", "Yes", etc
//   (any combination) using string methods.
//    How will you handle that ?

const input = "YeS"

if (input.toLowerCase() === "yes") {
    console.log("You got the correct verdict.")
}

// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.
// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string


//Assuming that the string is of single word since it is not mentioned in the question.
let s = "shResth"

// a) Convert the String into upper case.
let a = s.toUpperCase();

// b) Convert only the first character to uppercase.
let b = s[0].toUpperCase() + s.slice(1)

// c) Convert the String into lower case.
let c = s.toLowerCase();

// d) Break the string into two halves and swap them.
let x = s.slice(0, Math.ceil(s.length / 2))
let y = s.slice(Math.ceil(s.length / 2))
let d = y.concat(x)

// e) Count the repeating characters.
let e = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
}, {})

// f) Reverse the string
let f = s.split("").reverse().join("");


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)