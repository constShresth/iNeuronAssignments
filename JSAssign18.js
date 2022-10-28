// 1. What is the difference between a generator and a function?

//A generator is used to yield the next values on demand instead of 
//storing it in an objects whereas a normal function is designed to 
//perform a particular task which can be called whenever needed. We 
//also use a generator function to yield the next values.


// 2. What is the syntax of a generator?

function* numbersGen() {
    yield 1;
    yield 2;
}

const gen = numbersGen();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// 3. Are function generators iterable in JavaScript?

//A generator function generates a new value every time a yield 
//statement is executed. So, it also acts like an iterator.


// 4. Create a generator for multiplying?
// Output -
// > 2 * 2 = ?
// > 4
// > 3 + 3= ?
// > 6 = ?
// > true

function* generate() {
    yield 2 * 2;
    yield 3 + 3;
    yield true;
}

const gener = generate();
// console.log(gener.next())
// console.log(gener.next())
// console.log(gener.next())
// console.log(gener.next())


// 5. Print an infinite series of natural numbers using a generator.

function* naturalNum() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const prog5 = naturalNum();
// console.log(prog5.next())
// console.log(prog5.next())
// console.log(prog5.next())
// console.log(prog5.next())
// console.log(prog5.next())
// console.log(prog5.next())
// console.log(prog5.next())
// console.log(prog5.next())


// 6. Create a generator that can throw an exception.

function* exception() {
    let i = 1;
    while (true) {
        if (i === 7) {
            throw new Error("You can't yield 7.")
        }
        yield i++;
    }
}

const prog6 = exception();

// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())
// console.log(prog6.next())


// try {
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.throw("this is a custom error"))
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())
//     console.log(prog6.next())

// } catch (error) {
//     console.log(error)
// }


