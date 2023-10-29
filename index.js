const express = require('express')
const app = express()

const counter = require('./src/counter')

// import { someVariable, someFunction } from './counter';

console.log(counter.DischargeDate(new Date('2022-10-17')))

app.get('/', (req, res) => {
    res.send('hello world')
})


const port = 3000
app.listen(port, () => {
    console.log(`running on port ${port}`)
    console.log(`http://localhost:${port}/`)
})