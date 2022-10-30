// 1).
// function job() {
// 	return new Promise(function (resolve, reject) {
// 		reject();
// 	});
// }
// let promise = job();
// promise
// 	.then(function () {
// 		console.log('Success 1');
// 	})
// 	.then(function () {
// 		console.log('Success 2');
// 	})
// 	.then(function () {
// 		console.log('Success 3');
// 	})
// 	.catch(function () {
// 		console.log('Error 1');
// 	})
// 	.then(function () {
// 		console.log('Success 4');
// 	});
// What is the output of the code above ?

// ----output----

// Error 1
// Success 4

// 2). Write a sleep function using a promise in javascript?

async function loadData() {
  await sleep(2);
  console.log("woke up after 2 sec");
}

async function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

// console.log(loadData())

// 3). What is the output of the following code?
// const promise = new Promise(res => res(2));
// promise
// 	.then(v => {
// 		console.log(v);
// 		return v * 2;
// 	})
// 	.then(v => {
// 		console.log(v);
// 		return v * 2;
// 	})
// 	.finally(v => {
// 		console.log(v);
// 		return v * 2;
// 	})
// 	.then(v => {
// 		console.log(v);
// 	});

// ----output----

// 2
// 4
// undefined
// 8

// 4).
// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {
// 	console.log(1);
// 	resolve('success')
// }))
// console.log('middle')
// fn().then(res => {
// 	console.log(res)
// })
// console.log('end')
// What is the output of this code snippet?

// ----output----

// start
// middle
// 1
// end
// success

// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.

function delay() {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("This promise is resolved.");
    }, 1000);
  });
}

const promise = delay();
// promise.then(res => console.log(res))

// 6).
// Promise.resolve('Success!')
// 	.then(data => {
// 		return data.toUpperCase()
// 	})
// 	.then(data => {
// 		console.log(data)
// 	})

// What will the output be?

// output ==> SUCCESS!

// 7).
// var p = new Promise((resolve, reject) => {
// 	reject(Error('The Fails!'))
// })
// 	.catch(error => console.log(error))
// 	.then(error => console.log(error))

// What will the output be?

//--------answer---------

// First .catch function will log the error and since error has already been
// handled by .catch function so the next .then will log undefined.

// -----output-----

// Error: The Fails!
//     at /Users/shresth/Desktop/code/webDev/iNeuron/Assignments/JSAssign19.js:126:9
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (/Users/shresth/Desktop/code/webDev/iNeuron/Assignments/JSAssign19.js:125:9)
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47
// undefined

// 8).

// console.log('start')
// setTimeout(() => {
// 	console.log('setTimeout')
// })
// Promise.resolve().then(() => {
// 	console.log('resolve')
// })
// console.log('end')

// What will the output be ?

// ------output------

// start
// end
// resolve       (since setTimeout will go to task queue so resolve will be logged first.)
// setTimeout

// 10). //actually it will be 9 but in question it 10 by mistake.
// console.log('start')
// Promise.resolve(1).then((res) => {
// 	console.log(res)
// })
// Promise.resolve(2).then((res) => {
// 	console.log(res)
// })
// console.log('end')
// What will the output be?

// -----output------

// start
// end
// 1
// 2
