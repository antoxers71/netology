#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

yargs(hideBin(process.argv))
    .command('current [year] [month] [day]', 'Получение текущей даты', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'boolean',
                description: 'Получение текущего года'
            })
            .option('month', {
                alias: 'm',
                type: 'boolean',
                description: 'Получение текущего месяца'
            })
            .option('day', {
                alias: 'd',
                type: 'boolean',
                description: 'Получение текущего дня'
            })
    }, (argv) => {
        if (argv.year) {
            console.log(new Date().getFullYear());
            return
        }
        if (argv.month) {
            console.log(new Date().getMonth() + 1);
            return;
        }
        if (argv.day) {
            console.log(new Date().getDate());
            return;
        }

        console.log(new Date().toISOString());
    })
    .command('sub [year] [month] [day]', 'Вычесть период из текущей даты', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'number',
                description: 'Кол-во лет'
            })
            .option('month', {
                alias: 'm',
                type: 'number',
                description: 'Кол-во месяцев'
            })
            .option('day', {
                alias: 'd',
                type: 'number',
                description: 'Кол-во дней'
            })
    }, (argv) => {
        const date = new Date();

        if (argv.year) {
            date.setFullYear(new Date().getFullYear() - argv.year);
        }
        if (argv.month) {
            date.setMonth(new Date().getMonth() - argv.month);
        }
        if (argv.day) {
            date.setDate(new Date().getDate() - argv.day);
        }

        console.log(date.toISOString());
    })
    .command('add [year] [month] [day]', 'Прибавить период к текущей дате', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'number',
                description: 'Кол-во лет'
            })
            .option('month', {
                alias: 'm',
                type: 'number',
                description: 'Кол-во месяцев'
            })
            .option('day', {
                alias: 'd',
                type: 'number',
                description: 'Кол-во дней'
            })
    }, (argv) => {
        const date = new Date();

        if (argv.year) {
            date.setFullYear(new Date().getFullYear() + argv.year);
        }
        if (argv.month) {
            date.setMonth(new Date().getMonth() + argv.month);
        }
        if (argv.day) {
            date.setDate(new Date().getDate() + argv.day);
        }

        console.log(date.toISOString());
    })
    .parse()
