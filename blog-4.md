# Blog 4: OOP pillars in TypeScript

## Introduction
The four OOP pillars help organize code and reduce complexity in large projects.

## Body
Inheritance shares common behavior, polymorphism allows flexible implementations, abstraction hides details, and encapsulation protects state.

```ts
abstract class Shape {
	constructor(protected color: string) {}
	abstract area(): number;
}

class Circle extends Shape {
	constructor(color: string, private radius: number) {
		super(color);
	}

	area(): number {
		return Math.PI * this.radius * this.radius;
	}
}
```

`Shape` defines a shared contract, and `Circle` provides its own implementation.

## Conclusion
These pillars create clearer, safer boundaries and make large codebases easier to change.