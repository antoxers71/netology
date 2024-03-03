#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'number',
        description: 'кол-во лет'
    })
    .option('month', {
        alias: 'm',
        type: 'number',
        description: 'кол-во месяцев',
    })
    .option('date', {
        alias: 'd',
        type: 'number',
        description: 'кол-во дней',
    })
    .argv

const date = new Date();

if (argv.year) {
    date.setFullYear(new Date().getFullYear() - argv.year)
}
if (argv.month) {
    date.setMonth(new Date().getMonth() - argv.month)
}
if (argv.date) {
    date.setDate(new Date().getDate() - argv.date)
}

console.log(date.toISOString());
