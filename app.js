const express = require('express')
const app = express()

app.get('/', (req, res) => {
    try {
        res.send('heyyy')
    } catch (error) {
        res.status(500).send('Server error!')
    }
})
