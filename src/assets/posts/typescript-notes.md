---
title: Typescript Notes
desc: Notes about typescript when I was reading "Effective Typescript" from O’Reilly.
date: 2023-04-10
image: /posts/typescript-notes/poster.jpg
tags:
    - typescript
    - programming
---

## Type widening

- Ts infer type for any given value with a specificity and flexibility trade off.
- Provide some additional context for compiler for the process like: use `const`(narrower), explicit type annotation, use `const` assertion to eliminate will infer the narrowest possible type.

```ts
let x = 'x'; // use const to narrower
let vec = {x : 10, y : 20, z : 30};
getComponent(vec, x);
               // ~ Argument of type 'string' is not assignable to
               //   parameter of type '"x" | "y" | "z"'
```

```ts
const v1 = {
    x: 1,
    y: 2,
}; // Type is { x: number; y: number; }

const v2 = {
    x: 1 as const,
    y: 2,
}; // Type is { x: 1; y: number; }

const v3 ={
    x: 1,
    y: 2,
} as const; // Type is { readonly x: 1; readonly y: 2; }
```

## Type Narrowing

```ts
const el = document.getElementById('foo'); // Type is HTMLElement | null
// can check null first then throw error for early return
if (el) {
    el // Type is HTMLElement
    el.innerHTML = 'Party Time'.blink();
}
else{
    el // Type is null
    alert('No element #foo');
}
```

```ts
const members = ['Janet', 'Michael'].map(
    who => jackson5.find(n => n === who)
).filter(who => who !== undefined); // Type is (string | undefined)[]

//use type guard  to tell the type checker narrow type
//"x is T" tell checker can narrow type if the func return true
function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
}
const members = ['Janet', 'Michael'].map(
who => jackson5.find(n => n === who) ).filter(isDefined); // Type is string[]
```

## Prefer "Unions of Interfaces" to "Interfaces of Unions"

```ts
//Problem is how about layout is Fill and paint is Line ???
//What's type it should be?
interface Layer {
    layout: FillLayout | LineLayout | PointLayout;
    paint: FillPaint | LinePaint | PointPaint;
}

interface FillLayer {
    layout: FillLayout;
    paint: FillPaint;
}
interface LineLayer {
    layout: LineLayout;
    paint: LinePaint;
}
interface PointLayer {
    layout: PointLayout;
    paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;
```
