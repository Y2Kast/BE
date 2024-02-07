const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

async function dbConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('MySQL Database connected successfully.');
    return connection;
  } catch (error) {
    console.error('MySQL Database connection failed:', error);
    throw error; 
  }
}

module.exports = dbConnection;