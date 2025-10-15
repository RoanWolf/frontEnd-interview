'use strict'

// {
//     function fun(){}
// }

// fun();

function f(){
    let i = 0;
    return function fun(){
        return ++i;
    }
}
let cnt = f();
console.log(cnt()); // 1
console.log(cnt()); // 2

// cnt = null;

let a = f();
console.log(a()); // 1
console.log(a()); // 2