console.log(1 / 0); // Infinity

console.log(typeof 12n);  // bigint

console.log("1" + true ) // "1true"
console.log("1" - true ) // 0

console.log(0.1 + 0.2) // 0.30000000000000004

console.log([]) // []
console.log([] + [])  // ""
console.log([] + {})  // "[object Object]"
console.log({} + [])  // 0
console.log({} + {})  // NaN

console.log(true + false) // 1

let a = null;
console.log(a ?? 'default') // null