const express = require('express')
const app = express()

const counter = require('./src/counter')

// import { someVariable, someFunction } from './counter';

console.log(counter.DischargeDate(new Date('2022-10-17')))

app.get('/', (req, res) => {
    res.send({
        "전역일": counter.DischargeDate(new Date('2022-10-17')), 
        "이때까지": counter.DateDifference(new Date('2022-10-17')),
        "남은 날": counter.DateDifference(counter.DischargeDate(new Date('2022-10-17')))
    })
})




const port = 3000
app.listen(port, () => {
    console.log(`running on port ${port}`)
    console.log(`http://localhost:${port}/`)
})