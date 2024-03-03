#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'текущий год'
    })
    .option('month', {
        alias: 'm',
        type: 'boolean',
        description: 'текущий месяц',
    })
    .option('date', {
        alias: 'd',
        type: 'boolean',
        description: 'дата в календарном месяце',
    })
    .argv

if (argv.year) {
    console.log(new Date().getFullYear())
}
if (argv.month) {
    console.log(new Date().getMonth() + 1)
}
if (argv.date) {
    console.log(new Date().getDate())
}
console.log(new Date().toISOString())

