const Sequelize = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');
const Organization = require('./organization');

dotenv.config({
  path: path.join(__dirname, '../db.env')
});

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres'
  }
);

/* eslint-disable no-console */
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
/* eslint-enable no-console */

module.exports = {
  sequelize,
  Organization
};
