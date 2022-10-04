// 1. Can we put duplicate values in the set object ?

let a = new Set([1, 2, 1, 1, 2, 3, 45, 6])
console.log(a) //duplicate values will be removed from the set.

// 2. Write the syntax for
//   a) Creating new set object
let s = new Set();
//   b) Adding new element to set object
s.add(2)
s.add(3)
console.log(s)
//      c) Deleting element from set object
s.delete(3)
console.log(s)


// 3. Create a set object with four random numbers from 0 to 10. Check if this
//    newly created set object has 8 in it. Use set object methods.

let set = new Set();
for (let i = 1; i < 5; i++) {
    set.add(Math.ceil(Math.random() * 10))
}
if (set.has(8)) {
    console.log("Yes, the set has 8 in it.")
}
else {
    console.log("No, set does not have 8.")
}
console.log(set);