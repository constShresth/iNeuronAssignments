// 1. Carefully observe this example.
//  a) Is the InnerFunction() a closure?
//  b) What is output of this program

// function OuterFunction() {
//     var outerVariable = 100;
//     function InnerFunction() {
//         alert(outerVariable);
//     }
//     return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

let a = `Yes the InnerFunction() is a closure since it is accessing 
outerVariable from its parent function.`

function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        alert(outerVariable);
    }
    return InnerFunction;
}

var innerFunc = OuterFunction();
let output = innerFunc();
let b = "output will alert 100 in the browser."


// 2. What is the difference between a closure and a scope ?

let answer2 = `A function bound together with its lexical environment 
is called a closure whereas scope determines weather a value, expression 
or function can be used in the current execution context.`


// 3. What is a lexical scope and how is it related to closure?

let answer3 = `Any variable or function defined outside the current 
function is accessible to current function and is known as the lexical 
scope of the current function. 
A function with all the outside accessible variable and function(which 
are in its lexical scope) together known as closure.`


// 4. Output of following closure ?
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}

let answer4 = `Output of the above closure will be
3
3
3
because by the time 1 sec is finished the value of i has already reached 3,
so it will log three times the value of i(which is 3).`
