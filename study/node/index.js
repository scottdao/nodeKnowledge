const commander = require('commander');
const fs = require('fs')
    // console.log(process.argv)
commander.version('1.0.0', '-v -version')
    // 子命令
    // const subCommander = commander.command('<path>')
commander.option('-p, --path [path]', '目录', __dirname)
commander.action((path, pa) => {
        let u = fs.readdirSync(commander.path)
        console.log(u)
    })
    // if (process.argv.length < 3) {
    //     process.argv.push(__dirname)
    // }
commander.parse(process.argv)