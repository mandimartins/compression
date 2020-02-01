const express = require('express')
const app = express()
const compression = require('compression')

const largeObject = []
for (let i = 0; i < 100000; i++) {
    largeObject.push({
        name: 'John Doe',
        adress: 'Adress',
        anotherField: 'blablablabla'
    })
}

app.use(compression({level:9}))
app.get('/', (req, res) => {
    res.header('Cache-Control','public, max-age=3600')
    res.send(largeObject)
})

app.listen(3000, () => console.log('Listening...'))