// Q1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 1; i < 5; i++) {
	let s = "";
	for (let j = 0; j < i; j++) {
		s = s + arr[j] + " ";
	}
	for (let j = 0; j < i; j++) {
		arr.shift();
	}
	console.log(s)
}

// Q2. Write a program to find whether a given number is armstrong number or
// not-
// The Armstrong number is a number that is equal to the sum of cubes of
// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

function findArmsNum(n) {
	if (n === 0 || n === 1) {
		return `${n} is an armstrong number.`
	}
	let num = n.toString().split("").map(Number)
	//converted n to string then split it and stored it in an array as 
	//a string then converted the string to number.
	let arr = []
	for (let i = 0; i < num.length; i++) {
		arr.push(num[i] ** 3);
	}
	if (arr.length == 1) {
		result = arr[0]
	}
	else {
		arr.reduce((acc, cur) => result = acc + cur)
	}
	if (result === n) {
		return `${n} is an armstrong number.`
	}
	else {
		return `${n} is not an armstrong number.`
	}
}

console.log(findArmsNum(153))


// Q3. Write a program to find whether a given number is special number or
// not-
// If the sum of the factorial of digits of a number (N) is equal to the
// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

function findSpecNum(n) {
	let num = n.toString().split("").map(Number)
	//converted n to string then split it and stored it in an array as 
	//a string then converted the string to number.
	let arr = []
	for (let i = 0; i < num.length; i++) {
		arr.push(factorial(num[i]));
	}
	if (arr.length == 1) {
		result = arr[0]
	}
	else {
		arr.reduce((acc, cur) => result = acc + cur)
	}
	if (result === n) {
		return `${n} is an special number.`
	}
	else {
		return `${n} is not an special number.`
	}
}

function factorial(n) {
	if (n == 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

console.log(findSpecNum(145));