const knex = require('knex');
const configuration = require('../../knexfile');
const env = process.env.NODE_ENV == 'test' ? configuration.test : configuration.staging;

const connection = knex(env);

module.exports = connection;