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

// app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
    req.accepts('application/json');

    const user = req.body;
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
                    const areSamePasswords = results[0];

                    const secret = "SECRET"
                    if (!areSamePasswords) {
                        throw new Error("Invalid credentials")
                    } else {
                        const loggedUser = results[1];
                        const payload = { username: loggedUser.username };

                        jwt.sign(payload, secret, (error, token) => {

                            if (error) {
                                throw new Error("Sign in error!");
                            } else {
                                response.json({ token, loggedUser });
                            }
                        })
                    }

                }).catch(error => {
                    response.json({ message: error.message })
                })
        })
})

app.post('/register', (req, res) => {
    req.accepts('application/json');

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

app.post('/locations', async (req, res) => {
    const { name, street_address, street_address_2, city, state, zip_code, phone } = req.body;

    try {
        const [location] = await db('locations').insert({
            name,
            street_address,
            street_address_2,
            city,
            state,
            zip_code,
            phone,
        }).returning('id');

        res.status(201).json({ id: location.id });
    } catch (error) {
        console.error('Error creating location: ', error);
        res.status(500).json({ message: 'Error creating location' });
    }

});

app.put('/locations/:id', async (req, res) => {
    const { id } = req.params;

    const { name, street_address, street_address_2, city, state, zip_code, phone } = req.body;

    try {
        // Check if the location exists
        const existingLocation = await db('locations').where({ id }).first();

        if (!existingLocation) {
            return res.status(404).json({ message: 'Location not found' });
        }

        // Update the location record
        await db('locations').where({ id }).update({
            name,
            street_address,
            street_address_2,
            city,
            state,
            zip_code,
            phone,
        });

        // Get the updated location record
        const updatedLocation = await db('locations').where({ id }).first();

        // Return the updated location record in the response
        res.json(updatedLocation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/locations/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the location exists
        const existingLocation = await db('locations').where({ id }).first();

        if (!existingLocation) {
            return res.status(404).json({ message: 'Location not found' });
        }

        // Delete the associated appointments
        await db('appointments').where({ location_id: id }).delete();

        // Delete the location record
        await db('locations').where({ id }).delete();

        res.json({ message: 'Location deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/appointments', authenticate, async (req, res) => {

    const { page, perPage, sort, orderBy, filterColumn, filterValue } = req.query;

    // Build the query
    let query = db('appointments')
        .select(
            'appointments.id',
            'appointments.time',
            'appointments.user_id',
            'appointments.location_id',
            'users.username as user_username',
            'users.email as user_email',
            'users.first_name as user_first_name',
            'users.last_name as user_last_name',
            'users.street_address as user_street_address',
            'users.street_address_2 as user_street_address_2',
            'users.city as user_city',
            'users.state as user_state',
            'users.zip_code as user_zip_code',
            'users.user_type_id as user_user_type_id',
            'locations.name as location_name',
            'locations.phone as location_phone',
            'locations.street_address as location_street_address',
            'locations.street_address_2 as location_street_address_2',
            'locations.city as location_city',
            'locations.state as location_state',
            'locations.zip_code as location_zip_code'
        )
        .leftJoin('users', 'users.id', '=', 'appointments.user_id')
        .leftJoin('locations', 'locations.id', '=', 'appointments.location_id');

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
        // Map appointments to include user and location objects

        const appointments = data.map(appointment => ({
            id: appointment.id,
            time: appointment.time,
            user_id: appointment.user_id,
            location_id: appointment.location_id,
            user: {
                username: appointment.user_username,
                email: appointment.user_email,
                first_name: appointment.user_first_name,
                last_name: appointment.user_last_name,
                street_address: appointment.user_street_address,
                street_address_2: appointment.user_street_address_2,
                city: appointment.user_city,
                state: appointment.user_state,
                zip_code: appointment.user_zip_code,
                user_type_id: appointment.user_user_type_id
            },
            location: {
                name: appointment.location_name,
                phone: appointment.location_phone,
                street_address: appointment.location_street_address,
                street_address_2: appointment.location_street_address_2,
                city: appointment.location_city,
                state: appointment.location_state,
                zip_code: appointment.location_zip_code
            }
        }));
        res.json({ data: appointments, pagination });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.post('/appointments', async (req, res) => {
    const { time, user_id, location_id } = req.body;

    try {
        const [appointment] = await db('appointments').insert({
            time,
            user_id,
            location_id
        }).returning('id');

        res.status(201).json({ id: appointment.id });
    } catch (error) {
        console.error('Error creating appointment: ', error);
        res.status(500).json({ message: 'Error creating appointment' });
    }

});

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

app.put('/appointments/:id', async (req, res) => {
    const { id } = req.params;
    const { time, user_id, location_id } = req.body;

    try {
        // Check if the appointment exists
        const existingAppointment = await db('appointments').where({ id }).first();

        if (!existingAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Update the location record
        await db('appointments').where({ id }).update({
            time,
            user_id,
            location_id
        });

        // Get the updated location record
        const updatedAppointment = await db('appointments').where({ id }).first();

        // Return the updated location record in the response
        res.json(updatedAppointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/appointments/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the appointment exists
        const existingAppointment = await db('appointments').where({ id }).first();

        if (!existingAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Delete the appointment record
        await db('appointments').where({ id }).delete();

        res.json({ message: 'Appointment deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Routes goes here

app.listen(port, () => console.log(`Listening on port ${port}.`))