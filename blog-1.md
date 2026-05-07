# Blog 1: any vs unknown and type narrowing

## Introduction
Data from users or APIs is uncertain. In TypeScript, `any` skips safety, while `unknown` forces checks.

## Body
`any` lets any operation compile, even wrong ones. `unknown` requires narrowing before use.

```ts
function formatValue(value: unknown): string {
	if (typeof value === "string") {
		return value.toUpperCase();
	}

	if (typeof value === "number") {
		return value.toFixed(2);
	}

	return "unsupported";
}
```

Here, `typeof` checks narrow the type so the methods are safe.

## Conclusion
Use `unknown` for unpredictable data and narrow it before access.