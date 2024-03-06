#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('path', {
        alias: 'p',
        type: 'string',
        description: 'Путь до файла логов партии',
    })
    .argv

if (!argv['path']) {
    throw Error('Укажите путь до файла с логами');
}
const file = path.join(argv['path']);

console.log('Орел или решка анализ партий');

fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('Данные отсутствуют');
    } else {
        fs.readFile(file, function (err, data) {
            const parties = JSON.parse(data);
            const winPartiesCount = parties.filter(part => part.win).length;
            const lossPartiesCount = parties.length - winPartiesCount;
            const winPercent = Math.floor((winPartiesCount * 100) / parties.length);
            console.log(`
            Количество сыгранных партий: ${parties.length};
            Количество выигранных партий: ${winPartiesCount};
            Количество проигранных партий: ${lossPartiesCount};
            Процентное соотношение выигранных партий: ${winPercent};
            `)
        });
    }
});

