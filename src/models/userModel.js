const dbConnection = require('../config/dbConfig'); 
const bcrypt = require('bcrypt');

async function createUser(username, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 해싱
    const connection = await dbConnection();
    const [result] = await connection.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser };