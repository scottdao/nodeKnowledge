const  EventEmitter  = require('events');
// console.log(EventEmitter)// 自定义事件系统

class CreateEvents extends EventEmitter{
    constructor(name) {
        super()
        this.name = name;
        this.age = 21;
        // this.group()
    }
    group(){
        setInterval(() => {
            this.emit('grow')
        }, 1000)
        
        
    }
}

var create = new CreateEvents('scott')
// create.addListener('grow', ()=>{
//     console.log(this, 111)
// })

// console.log(process.argv)