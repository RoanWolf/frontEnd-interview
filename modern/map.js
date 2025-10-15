'use strict';
let map = new Map();

map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔键
map.set({a:1}, 'obj1'); // 对象键

console.log(map.keys());     // MapIterator {'1', 1, true, {…}}
console.log(map.values());   // MapIterator {'str1', 'num1', 'bool1', 'obj1'}
console.log(map.entries());  // MapIterator {'1' => 'str1', 1 => 'num1', true => 'bool1', {…} => 'obj1'}

console.log('--------------------');
for(let [key , value] of map){
    console.log(`${key} : ${value}`);
}

console.log('--------------------');
console.log( map === map.entries() ); // false

console.log('--------------------');
let set  = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add(3);

console.log(set); // Set(3) {1, 2, 3}
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

console.log('--------------------');
const map1 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
const arr1 = Array.from(map1);
console.log(Object.keys(map1)); 
console.log(Object.values(map1));
console.log(Object.entries(map1));
console.log(Object.keys(arr1));
console.log(Object.values(arr1));
console.log(Object.entries(arr1));