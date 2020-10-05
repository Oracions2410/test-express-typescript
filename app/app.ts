import express = require('express')

const app: express.Application = express()

app.get('/', function (req, res) {
    res.send('Welcome, typescript + express')
})

app.listen(3000, () => console.log('Example app listing on port 3000'))