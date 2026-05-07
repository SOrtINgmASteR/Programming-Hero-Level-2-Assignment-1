# Blog 2: Pick and Omit keep code DRY

## Introduction
Large interfaces often need smaller versions. `Pick` and `Omit` create those slices without duplication.

## Body
`Pick` selects only the needed fields. `Omit` removes fields you do not want.

```ts
interface User {
	id: number;
	name: string;
	email: string;
	passwordHash: string;
}

type PublicUser = Omit<User, "passwordHash">;
type UserCard = Pick<User, "id" | "name">;
```

If the base interface changes, the slices update automatically.

## Conclusion
`Pick` and `Omit` reduce repetition and keep interfaces consistent.