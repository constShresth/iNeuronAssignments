// Q.1) Perform the following operations to provide the implementation for a
// Rectangle class.The operations are:
//     i) Add an area() method to the Rectangle class.
//    ii) Create a Square class that satisfies the following conditions:
//          ○ It is a subclass of Rectangle.
//          ○ It contains a constructor and no other methods.
//          ○ It can use the Rectangle class' area method to print the area
//              of a Square object.

class Rectangle {

    constructor(length, bredth) {
        this.length = length;
        this.bredth = bredth;
    }
    area() {
        return this.length * this.bredth
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side)
        this.length = side;
        this.bredth = side;
    }
}

let a = new Rectangle(3, 4)
console.log(a.area())

let b = new Square(4)
console.log(b.area())


// 2) Write a javascript function find_largest to return the nth largest number
//    in an array -
//         eg - given an array of integers - [3, 45, 6, 7, 23, 5, 7, 8]

// find_largest(3) will return third largest number from the above array -
//     which is 8.


let arr = [3, 45, 6, 7, 23, 5, 7, 8]
function find_largest(n, arr) {

    let b = arr.sort(function (a, b) { return b - a });
    return b[n - 1]
}

console.log(find_largest(3, arr))


// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes(-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0 - 254 - 6 - 8.
// computeDash(025468) -> 0 - 254 - 6 - 8.

function computeDash(num) {

    let e = num.toString()  //converting the num to string.
    let f = e.split("")     //spliting the digits and storing as string in an array.
    let g = f.map(Number)   //converting the digits to the number

    function isEven(n) {
        if (n % 2 == 0) {
            return true;
        }
        return false;
    }


    for (let i = 0; i < g.length; i++) {
        if (isEven(g[i]) && isEven(g[i + 1])) {
            g.splice(i + 1, 0, "-")    //creating a new array after adding the - .
        }

    }

    let y = g.join();               //joining the array and converting it to string.
    let z = y.replace(/,/g, "")      //removing all the commas 
    return z
}

console.log(computeDash(25468546))
