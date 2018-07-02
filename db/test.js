const { Client } = require('pg');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.join(__dirname, 'db.env')
});

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

const thing = async () => {
  await client.connect();

  const res = await client.query('SELECT * from organization');
  console.log(res.rows[0]);
  await client.end();
};

thing();
