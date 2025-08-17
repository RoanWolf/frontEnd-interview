function Person(name , age){
    this.name = name;
    this.age = age;
}



Person.prototype.eat = function(){
    console.log("吃饭！")
}

const p1 = new Person('hh' , 90);
const p2 = new  Person('das',12);


// console.log(p1.__proto__ === Person.prototype) // true

console.log(p1.__proto__.__proto__)

