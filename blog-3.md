# Blog 3: Generics for reusable, typed code

## Introduction
Generics let one function work with many types while staying safe.

## Body
The type parameter connects the input and output types.

```ts
function firstItem<T>(items: T[]): T | undefined {
	return items[0];
}

const name = firstItem(["Alice", "Bob"]);
const score = firstItem([10, 20]);
```

The compiler infers `name` as `string | undefined` and `score` as `number | undefined`.

## Conclusion
Generics give reusable utilities without losing type safety.