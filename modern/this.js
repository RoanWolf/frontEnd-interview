'use strict';
let user = {
  a: 1,
  sayThis() {
    return this;
  },
};

let admin = user;
console.log(user.sayThis() === user); // true
console.log(admin.sayThis() === user); // true
console.log(user.sayThis() === admin); // true
console.log(admin.sayThis() === admin); // true

console.log("--------------------");

let user2 = {
  a: 1,
  sayThis:()=>{
    return this;
  }
};
admin = user2;
console.log(user2.sayThis() === user2); // false
console.log(admin.sayThis() === user2); // false
console.log(user2.sayThis() === admin); // false
console.log(admin.sayThis() === admin); // false

console.log("--------------------");

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user3 = makeUser();
console.log(user3);
// console.log(user.ref.name)  bug

console.log("--------------------");

let obj = {
    child:{
        name: "child",
        sayThis() {
            return this;
        }
    }
}
console.log(obj.child.sayThis() === obj.child); // true