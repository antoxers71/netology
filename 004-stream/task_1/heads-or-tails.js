#!/usr/bin/env node
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const fs = require('fs');
const path = require('path');

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('log', {
        alias: 'l',
        type: 'string',
        description: 'Имя файла для логов партии',
        default: 'default'
    })
    .argv

const file = path.join(__dirname, 'logs', `${argv['log']}.json`);

const hiddenNumber = Math.ceil( Math.random() * 2);

console.log('Орел или решка (1 или 2)');
rl.on('line', (answer) => {
    console.log(hiddenNumber === Number(answer) ? 'Верно' : 'Не верно')
    writeLog({win: hiddenNumber === Number(answer)})
    rl.close();
});

const writeLog = content => {
    fs.access(file, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(file, JSON.stringify([content]), errorHandler);
        } else {
            fs.readFile(file, function (err, data) {
                const json = JSON.parse(data);
                json.push(content);
                fs.writeFile(file, JSON.stringify(json), errorHandler);
            })
        }
    });
};

const errorHandler = err => {
    if (err) console.error(err);
};

