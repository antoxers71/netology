#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .option('current', {
        alias: 'c',
        type: 'boolean',
        description: 'текущий период'
    })
    .option('add', {
        alias: 'a',
        type: 'boolean',
        description: 'добавить период'
    })
    .option('sub', {
        alias: 's',
        type: 'boolean',
        description: 'отнять период'
    })
    .option('year', {
        alias: 'y',
        type: 'number',
        description: 'год'
    })
    .option('month', {
        alias: 'm',
        type: 'number',
        description: 'месяц',
    })
    .option('day', {
        alias: 'd',
        type: 'number',
        description: 'день',
    })
    .argv

const date = new Date();

if (argv.sub) {
    if (argv.year) {
        date.setFullYear(new Date().getFullYear() - argv.year);
    }
    if (argv.month) {
        date.setMonth(new Date().getMonth() - argv.month);
    }
    if (argv.day) {
        date.setDate(new Date().getDate() - argv.day);
    }
}

if (argv.add) {
    if (argv.year) {
        date.setFullYear(new Date().getFullYear() + argv.year);
    }
    if (argv.month) {
        date.setMonth(new Date().getMonth() + argv.month);
    }
    if (argv.day) {
        date.setDate(new Date().getDate() + argv.day);
    }
}

if (argv.current) {
    if (argv.hasOwnProperty('year')) {
        console.log(new Date().getFullYear());
        return;
    }
    if (argv.hasOwnProperty('month')) {
        console.log(new Date().getMonth() + 1);
        return;
    }
    if (argv.hasOwnProperty('day')) {
        console.log(new Date().getDate());
        return;
    }
}

console.log(date.toISOString())

