let obj = {
  a: 1,
  b: 2,
};

let json = JSON.stringify(obj);
console.log(json); // {"a":1,"b":2}

let parsed = JSON.parse(json);
console.log(parsed); // { a: 1, b: 2 }