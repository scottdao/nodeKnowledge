var obj1 = {
    a:1,
    b:2
}
// 迭代协议，for...of循环会调用迭代器函数下next方法，在next方法下的done属性为ture，跳出for...of 循环，done为false会继续循环

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

// 迭代器实现：
for (const att of obj1) {
    console.log(att)
}