### es6

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