let id = Symbol("id");
let user = {
  [id]: 123
};

// assign 会拷贝 symbol 属性
let clone = Object.assign({}, user);

console.log(clone[id]); // 123
console.log(user[id]); // 123

console.log("--------------------");    

// for...in 不会遍历 symbol 属性
for (let key in user) console.log(key); 
// Object.keys 也不会返回 symbol 属性
console.log(Object.keys(user)); // []

console.log("--------------------");
