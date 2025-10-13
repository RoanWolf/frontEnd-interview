let user = {
    age: 30,
    2:23,
    name: 'RoanWolf',
    1: 'one'
}

console.log(Object.hasOwn(user, 'name')); // true
console.log(Object.hasOwn(user, 'toString')); // false

delete user.age;

console.log(user.hasOwnProperty('age')); // false
user.age = 30;
console.log(user.hasOwnProperty('age')); // true

for(const key in user){
    console.log(key); // 1, age, name
}