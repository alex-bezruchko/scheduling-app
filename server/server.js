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

function authenticate(req, res, next) {
    const token = req.get("Authorization")
    // const token = authHeader.split(" ")[1]
    const secret = "SECRET"
    jwt.verify(token, secret, (error, payload) => {
        console.log(token)
        if (error) {
            throw new Error("sign in error!")
        } else {
            db("users")
                .where({ username: payload.username })
                .first()
                .then(user => {
                    req.user = user
                    next()
                }).catch(error => {
                    res.json({ message: error.message })
                })
        }

    })
}

app.post("/login", (req, response) => {
    const user = req.body
    db("users")
        .where({ username: user.username })
        .first()
        .then(retrievedUser => {
            if (!retrievedUser) throw new Error("user not found!")
            return Promise.all([
                bcrypt.compare(user.password, retrievedUser.password_hash),
                Promise.resolve(retrievedUser)
            ])
                .then(results => {
                    const areSamePasswords = results[0]
                    if (!areSamePasswords) throw new Error("Invalid credentials")
                    const user = results[1]
                    const payload = { username: user.username }
                    const secret = "SECRET"
                    jwt.sign(payload, secret, (error, token) => {
                        if (error) {
                            throw new Error("Sign in error!")
                        } else {
                            response.json({ token, user })
                        }
                    })
                }).catch(error => {
                    response.json({ message: error.message })
                })
        })
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

app.get('/users', authenticate, (req, res) => {
    res.send('Hello from express server')
})

// Routes goes here

app.listen(port, () => console.log(`Listening on port ${port}.`))