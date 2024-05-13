// console.log(process.argv.slice(2)[0])
const minimist = require('minimist')
// process.argv.forEach(item => console.log(item))

const argNew = minimist(process.argv.slice(2))
console.log(argNew.name)