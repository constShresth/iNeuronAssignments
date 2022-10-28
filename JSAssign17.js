// 1. Create a function to iterate over the following list ["John",
//     "Rohn", "Danny", "James"]

const arr = ["John", "Rohn", "Danny", "James"];
const iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());



// 2. Iterate over all the characters of the word "iNeuron".

const str = "iNeuron"
const iter2 = str[Symbol.iterator]();
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())


// 3. Create a functional iterator, with a next function.

function iterate(arr) {
	let nextIndex = 0;
	return {
		next: function () {
			if (nextIndex < arr.length) {
				return {
					value: arr[nextIndex++],
					done: false
				}
			}
			else {
				return {
					done: true
				}
			}
		}
	}
}

const fruit = ["apple", "orange", "mango", "grapes"]
const iter3 = iterate(fruit);
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());


// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - ["a", "b", "c", "d"]
// Array 2 - ["e", "f", "g", "h", "a", "i", "j"]

const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];
const result = [];
for (let i of arr1) {
	for (let j of arr2) {
		if (i === j) {
			result.push(i)
		}
	}
}

// console.log(result)


// 5. What are the different ways of iterating through an array?
// demonstrate them.

let array = [1, 2, 3, 4, 5, 6, 7]

//method 1 --> for loop;

// for (let i of array) {
// 	console.log(i)
// }

//method 2 --> Symbol.iterator;

let iterator = array[Symbol.iterator]();
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

