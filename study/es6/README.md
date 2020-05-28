### [es6](https://es6.ruanyifeng.com/)

-  [对象私有化，数据保护:symbol](./symbol.js)
   1. 内部变量对象私有化
   ```
      var Per = function(name, age){
         this.name = name
         var newAge = age;
         this.getAge = function(){
            return newAge
         }
      }

      var per = new Per('ldy', 18);
   ```
   2. symbol对象私有化
   ```
   var Dog = function(soud, s){
         this.soud = soud
         this[Symbol('s')] = s
      }

      var dog = new Dog('wang', 24);
      console.log(dog, dog[Symbol('s')])
   ```
- [对象迭代器实现](./iterator.js)

   ```
      var obj1 = {
         a:1,
         b:2
      }
      obj1[Symbol.iterator] = function(){
            const objKeys = Object.keys(obj1);
            const len = objKeys.length;
            let a = 0;
            return {
               next(){
                     if(a < len ){
                        return {
                           value: objKeys[a++],
                           done:false
                        }
                     }
                     return {
                        done:true
                     }
               }
            }
      }
      for (const att of obj1) {
         console.log(att) // a,b
      }
   ```

 - [generator](./generator.js)

   ### 参考文档

   - [ES6 入门教程](https://es6.ruanyifeng.com/)
   - [MDN - iterator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)