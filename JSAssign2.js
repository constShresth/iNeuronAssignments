// Q1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function checkTriangle(side1, side2, side3) {
	if (side1 === side2 && side2 === side3) {
		return "The triangle is equilateral."
	}
	else if (side1 === side2 | side2 === side3 | side1 === side3) {
		return "The triangel is isosceles."
	}
	else {
		return "The triangle is scalene."
	}
}

console.log(checkTriangle(3, 2, 3))


// Q2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function findGrade(marks) {
	switch (true) {
		case 91 <= marks && marks <= 100:
			return "S grade"
			break;
		case 81 <= marks && marks <= 90:
			return "A grade"
			break;
		case 71 <= marks && marks <= 80:
			return "B grade"
			break;
		case 61 <= marks && marks <= 70:
			return "C grade"
			break;
		case 51 <= marks && marks <= 60:
			return "D grade"
			break;
		case 41 <= marks && marks <= 50:
			return "E grade"
			break;
		case 0 <= marks && marks <= 40:
			return "Student has failed"
			break;
		default:
			break;
	}
}

console.log(findGrade(0));


// Q3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

function findSum() {
	let result = 0;
	for (let i = 1; i < 1000; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			result = result + i
		}
		else if (i % 3 == 0) {
			result = result + i
		}
		else if (i % 5 == 0) {
			result = result + i
		}

	}
	return result;
}

console.log(findSum());


// Q4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).


function factorialOfPrime(n1, n2) {
	let obj = {};
	for (let i = n1; i <= n2; i++) {
		if (isPrime(i)) {
			obj[i] = factorial(i);
		}
	}
	return obj;
}

function factorial(n) {
	if (n == 0) {
		return 1;
	}
	return n * factorial(n - 1)
}

function isPrime(n) {
	if (n == 0 | n == 1) {
		return false
	}
	else if (n == 2) {
		return true
	}
	else {
		for (let i = 2; i * i <= n; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
}

console.log(factorialOfPrime(1, 100));
