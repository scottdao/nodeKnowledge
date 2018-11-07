
/*
*
*在一个模块访问以另一模块中的变量。
*
*1.global访问
*
*
*2.module访问
*** module.exports
*** exports 
*** 以上两者是一致的  exports===module.exports , true;
*
*
*破坏了其属性；module.exports = [1,2,3]//重新赋值，他就和exports的指向关系破裂。
*/
var m1 = require('./m2');
console.log(m1)

/*Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'D:\\gitScott\\nodeKnowledge\\study\\module\\m1.js',
  loaded: false,
  children: 
   [ Module {
       id: 'D:\\gitScott\\nodeKnowledge\\study\\module\\m2.js',
       exports: {},
       parent: [Circular],
       filename: 'D:\\gitScott\\nodeKnowledge\\study\\module\\m2.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths: 
   [ 'D:\\gitScott\\nodeKnowledge\\study\\module\\node_modules',
     'D:\\gitScott\\nodeKnowledge\\study\\node_modules',
     'D:\\gitScott\\nodeKnowledge\\node_modules',
     'D:\\gitScott\\node_modules',
     'D:\\node_modules' ] }
  */