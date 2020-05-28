function* gen() {
    const a = yield getData(1);
    console.log(a)
    yield console.log(3)
}

function getData(a) {
    return  new Promise((resovle)=>{
                setTimeout(() => {
                    
                    resovle(a)
                }, 0);
    })
   
}
let g = gen();

g.next();
g.next();