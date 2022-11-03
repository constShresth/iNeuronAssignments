// 1). How does async/await help with performance and scalability?

//async/await helps with performance and scalability by executing tasks asynchronously
//by doing multiple things together thus reducing the time required to complete
// all the task.

// 2). Is it possible to use async/await with promise chains? If yes,
// how can this be achieved?

//No

// 3). Give 3 real world examples where async/await has been used?

//1- Requesting data from a network
//2- Accessing a database or reading/writing in file system
//3- Instant messangers

// 4).
// async function inc(x) {
//   x = x + (await 1);
//   return x;
// }
// async function increment(x) {
//   x = x + 1;
//   return x;
// }
// inc(1).then(function (x) {
//   increment(x).then(function (x) {
//     console.log(x);
//   });
// });

// Find output.

// ----OUTPUT-----
//3

// 5).

// let p = new Promise(function (resolve, reject) {
//   reject(new Error("some error"));
//   setTimeout(function () {
//     reject(new Error("some error"));
//   }, 1000);
//   reject(new Error("some error"));
// });
// p.then(null, function (err) {
//   console.log(1);
//   console.log(err);
// }).catch(function (err) {
//   console.log(2);
//   console.log(err);
// });
// Find output.

// ----OUTPUT-----

// 1
// Error: some error
//     at /Users/shresth/Desktop/code/webDev/iNeuron/Assignments/JSAssign20.js:36:10
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (/Users/shresth/Desktop/code/webDev/iNeuron/Assignments/JSAssign20.js:35:9)
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47

// 6).
// async function f1() {
//   console.log(1);
// }
// async function f1() {
//   console.log(2);
// }
// console.log(3);
// f1();
// console.log(1);
// f2();
// async function f2() {
//   console.log("Go!");
// }

// Find output.

// ----OUTPUT-----

// 3
// 2
// 1
// Go!

// 7).

// function resolveAfterNSeconds(n, x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, n);
//   });
// }

// (function () {
//   let a = resolveAfterNSeconds(1000, 1);
//   a.then(async function (x) {
//     let y = await resolveAfterNSeconds(2000, 2);
//     let z = await resolveAfterNSeconds(1000, 3);
//     let p = resolveAfterNSeconds(2000, 4);
//     let q = resolveAfterNSeconds(1000, 5);
//     console.log(x + y + z + (await p) + (await q));
//   });
// })();

// Find output.

// ----OUTPUT-----

// 15

// 8). Is it possible to nest async functions in JavaScript? Explain with
// examples.

// Yes.

//Here b() is nested inside a() and c() is nested inside b();
async function a() {
  return b();
}

async function b() {
  return c();
}

async function c() {
  return "I am async function c and I have been called.";
}

const promise = a();
promise.then((data) => {
  // console.log(data);
});

// 9). What is the best way to avoid deadlocks when using
// async/await?

// We can avoid deadlocks by avoiding the use of multiple await keywords in a
// single async function instead we should create multiple async function to run each
// await independent of each other.

// 10). In which scenarios would you use synchronous code instead of
// asynchronous code?

//We will use synchronous code whenever the next step is dependent upon
//the result of previous step
