const http = require('http')
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('city', {
        alias: 'c',
        type: 'string',
        description: 'Имя города',
        default: 'Москва'
    })
    .argv

const apiKey = process.env.apiKey
const url = `http://api.openweathermap.org/data/2.5/weather?q=${argv['city']}&appid=${apiKey}&lang=ru&units=metric`

http.get(url, (res) => {
    const {statusCode} = res
    if (statusCode !== 200){
        console.log(`statusCode: ${statusCode}`)
        process.exit()
        return
    }

    let rowData = ''
    res.on('data', (chunk) => {
        rowData += chunk
    })
    res.on('end', () => {
        let parseData = JSON.parse(rowData)
        console.log(`Погода в городе ${parseData.name} сейчас: ${parseData.weather[0].description}, температура ${Math.round(parseData.main.temp)}°C`)
    })
}).on('error', (err) => {
    console.error(err)
})