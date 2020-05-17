//  属性私有化；进行数据保护

// 1. 内部变量对象私有化
var Per = function(name, age){
    this.name = name
    var newAge = age;
    this.getAge = function(){
        return newAge
    }
}

var per = new Per('ldy', 18);
// console.log(per, per.age, per.getAge());

// 2. symbol对象私有化

var Dog = function(soud, s){
    this.soud = soud
    this[Symbol('s')] = s
}

var dog = new Dog('wang', 24);
// console.log(dog, dog[Symbol('s')])
//  块作用域
//  解构赋值

var [a] = 'myso';
console.log(a);
console.log(...[1,2,3,4,5])