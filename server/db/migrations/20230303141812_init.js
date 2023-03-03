/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('user_types', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
        }),

        knex.schema.createTable('users', function (table) {
            table.increments('id').primary();
            table.string('username').notNullable();
            table.string('email').notNullable();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('street_address').notNullable();
            table.string('apt_suite');
            table.string('city').notNullable();
            table.string('state').notNullable();
            table.string('zip_code').notNullable();
            table.integer('user_type_id').unsigned().notNullable();
            table.foreign('user_type_id').references('user_types.id');
        }),

        knex.schema.createTable('locations', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('street_address').notNullable();
            table.string('apt_suite');
            table.string('city').notNullable();
            table.string('state').notNullable();
            table.string('zip_code').notNullable();
        }),

        knex.schema.createTable('appointments', function (table) {
            table.increments('id').primary();
            table.datetime('time').notNullable();
            table.integer('user_id').unsigned().notNullable();
            table.integer('location_id').unsigned().notNullable();
            table.foreign('user_id').references('users.id');
            table.foreign('location_id').references('locations.id');
        })
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
