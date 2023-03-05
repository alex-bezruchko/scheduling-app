const express = require('express');
const cors = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')

const db = require('./db/db');
const knexPaginate = require('knex-paginate');
knexPaginate.attachPaginate();


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

app.get('/users', authenticate, async (req, res) => {

    const { page, perPage, sort, orderBy, filterColumn, filterValue } = req.query;

    // Build the query
    let query = db('users');

    // Apply filter if provided
    if (filterColumn && filterValue) {
        query = query.where(filterColumn, 'like', `%${filterValue}%`);
    }

    // Apply sorting if provided
    if (orderBy && sort) {
        query = query.orderBy(orderBy, sort);
    }

    // Apply pagination
    try {
        const { data, pagination } = await query.paginate(perPage || 10, page || 1);
        res.json({ data, pagination });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await db('users').where({ id }).first();

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/locations', authenticate, async (req, res) => {

    const { page, perPage, sort, orderBy, filterColumn, filterValue } = req.query;

    // Build the query
    let query = db('locations');

    // Apply filter if provided
    if (filterColumn && filterValue) {
        query = query.where(filterColumn, 'like', `%${filterValue}%`);
    }

    // Apply sorting if provided
    if (orderBy && sort) {
        query = query.orderBy(orderBy, sort);
    }

    // Apply pagination
    try {
        const { data, pagination } = await query.paginate(perPage || 10, page || 1);
        res.json({ data, pagination });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.get('/locations/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const location = await db('locations').where({ id }).first();

        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }

        res.json(location);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/appointments', authenticate, async (req, res) => {

    const { page, perPage, sort, orderBy, filterColumn, filterValue } = req.query;

    // Build the query
    let query = db('locations');

    // Apply filter if provided
    if (filterColumn && filterValue) {
        query = query.where(filterColumn, 'like', `%${filterValue}%`);
    }

    // Apply sorting if provided
    if (orderBy && sort) {
        query = query.orderBy(orderBy, sort);
    }

    // Apply pagination
    try {
        const { data, pagination } = await query.paginate(perPage || 10, page || 1);
        res.json({ data, pagination });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.get('/appointments/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await db('appointments').where({ id }).first();

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.json(appointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Routes goes here

app.listen(port, () => console.log(`Listening on port ${port}.`))