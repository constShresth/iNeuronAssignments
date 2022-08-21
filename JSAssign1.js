// Q1: Write a program to find whether a given year is a leap year or not.

let checkLeapYear1 = (year) => {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return `${year} is a leap year.`;
			}
			else {
				return `${year} is not a leap year.`;
			}
		}
		else {
			return `${year} is a leap year.`;
		}
	}
	else {
		return `${year} is not a leap year.`;
	}
}

console.log(checkLeapYear1(2020));

//shorter version of above code.
let checkLeapYear2 = (year) => {
	if (((0 == year % 4) && (0 != year % 100)) || (0 == year % 400)) {
		return `${year} is a leap year.`;
	}
	else {
		return `${year} is not a leap year.`;
	}
}

console.log(checkLeapYear2(2024));


// Q2: Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

let convertor = (temp, unit) => {
	let c;
	let f;
	if (unit === "c") {
		c = temp;
		f = ((c * 9) / 5) + 32;
		return `${c}°C is ${f}°F.`;
	}
	else if (unit === "f") {
		f = temp;
		c = (f - 32) / 9 * 5;
		return `${f}°F is ${c}°C.`;
	}
}

console.log(convertor(60, "c"));
console.log(convertor(45, "f"));


// Q3: Write a program to find the factorial of a number.

let factorial = (n) => {
	if (n == 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

console.log(factorial(5));