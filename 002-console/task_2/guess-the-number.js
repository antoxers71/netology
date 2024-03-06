#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const hiddenNumber = Math.round(Math.random() * 10);

console.log('Загадано число в диапазоне от 0 до 100');
rl.on('line', (answer) => {
    if (hiddenNumber > answer) {
        console.log('Больше')
    } else if(hiddenNumber < answer) {
        console.log('Меньще')
    } else {
        console.log(`Отгадано число: ${answer}`);
        rl.close();
    }
});

