// const x = "1"
// const y = "2"

// console.log(x ,y)

// console.log('I am %s and my age is %d', 'hellenic', 23)
// console.clear()
// console.count('this is hellenic')
// console.count('this is hellenic')
// console.count('this is Niko')

// const sum = () => console.log(`the sum of 2 and 3 is ${2+3}`)

// const measureTime = () => {
//     console.time('sum()')
//     sum()
//     console.timeEnd('sum()')
// }
// measureTime()

const chalk = require('chalk')
const progressBar = require('progress')

const bar = new progressBar('downloading [:bar] :rate/bps :percent :etas', {
    total: 20,
})

const timer = setInterval(() => {
    bar.tick()
    if(bar.complete){
        clearInterval(timer)
    }
}, 100);

console.log(chalk.blueBright("downloading is ending there !"))