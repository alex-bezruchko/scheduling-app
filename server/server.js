const express = require('express');
const cors = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')
const db = require('./db/db')

dotenv.config();
const app = express()

// const port = process.env.POSTGRES_PORT || 3000;
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())

function generateAccessToken(username) {
    return jwt.sign(username, process.env.APP_TOKEN, { expiresIn: '1800s' });
}

app.get('/login', (req, res) => {
    res.send('Login')
})

app.post('/register', (req, res) => {
    const body = req.body

    bcrypt.hash(body.password, 12)
        .then(hashed_password => {
            return db("users")
                .insert({
                    username: body.username,
                    password_hash: hashed_password,
                    email: body.email,
                    first_name: body.first_name,
                    last_name: body.last_name,
                    street_address: body.street_address,
                    street_address_2: body.street_address_2,
                    city: body.city,
                    state: body.state,
                    zip_code: body.zip_code,
                    user_type_id: body.user_type_id
                })
                .returning("*")
                .then(users => {
                    const user = users[0]
                    res.json({ user })
                }).catch(error => {
                    console.log(error)
                    res.json({ error: error.message })
                })
        })
})

app.get('/users', (req, res) => {
    res.send('Hello from express server')
})

// Routes goes here

app.listen(port, () => console.log(`Listening on port ${port}.`))