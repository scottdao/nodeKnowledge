const commander = require('commander');
const subCommand = commander.command('create <a>');

// 回调action 
subCommand.action((a) => {
    console.log(a)
})
commander.parse(process.argv)