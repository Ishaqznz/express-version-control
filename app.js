const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const hello = 1234

app.listen(PORT, () => {
    console.log(`The Server is started at ${ PORT }`)
})
