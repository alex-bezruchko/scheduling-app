const express = require('express')
const cors = require('express')

const port = process.env.POSTGRES_PORT || 3000;

const app = express()
app.use(express.json({ limit: '5MB', extended: true })); // express.json is replacement for bodyparser , Include extra params {} if needed 
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from express server')
})

// Routes goes here

app.listen(port, () => console.log(`Listening on port ${port}.`))