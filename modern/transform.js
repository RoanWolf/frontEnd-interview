let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// 转换演示：
console.log(String(user)); //hint: string  {name: "John"}

console.log('--------------------');


let str = "Hello";
str.test = 5;
console.log(str.test); // undefined
