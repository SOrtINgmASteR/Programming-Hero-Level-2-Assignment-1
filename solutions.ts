// Problem: 1
function filterEvenNumbers(numbers: number[]): number[] {
    const evenNumbers: number[] = [];
	numbers.map((value) => {
        if (value % 2 === 0) {
            evenNumbers.push(value);
        }
    });
    return evenNumbers;
}


// Problem: 2
function reverseString(input: string): string {
	return input.split("").reverse().join("");
}


// Problem: 3
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
	if (typeof value === "string") {
		return "String";
	}
	return "Number";
}


// Problem: 4
function getProperty<T extends object, K extends keyof T>(object: T, key: K): T[K] {
	return object[key];
}


// Problem: 5
export interface Book {
	title: string;
	author: string;
	publishedYear: number;
}

export function toggleReadStatus(book: Book): Book & { isRead: boolean } {
	return {
		...book,
		isRead: true,
	};
}


// Problem: 6
class Person {
    name: string;
    age: number;
	constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
	grade: string;
	constructor(name: string, age: number, grade: string) {
		super(name, age);
		this.grade = grade;
	}

	getDetails(): string {
		return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
	}
}


// Problem: 7
function getIntersection(
	first: number[],
	second: number[]
): number[] {
	const lookUp = new Set(second);
	return first.filter((value) => lookUp.has(value));
}

