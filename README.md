# Proxy Wrapper

![Programing Language](https://img.shields.io/badge/TypeScript-@next-%233178C6?logo=typescript&logoColor=white)

This is a wrapper made with proxy for access nested properties of objects in a string-like manner with dot notation.
It also provides an optional 'default' property that can be returned if the property is not found.


## Basic Usage

```typescript
const object = new ProxyWrapper({
    default: 'Sorry, not found!'
})

object['a'] = 1
console.log(object['a'])      // {a: 1}

object['a.b'] = 2
console.log(object['a.b'])    // {a: {b: 2}}

object['a.b.c'] = 3
console.log(object['a.b.c'])  // {a: {b: {c: 3}}}

console.log(object['x'])      // Sorry, not found!
console.log(object['x.y'])    // Sorry, not found!

delete object['a']
```
