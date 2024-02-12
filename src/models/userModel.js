const dbConnection = require('../config/dbConfig'); 
const bcrypt = require('bcrypt');

const createUser = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 해싱
    const connection = await dbConnection();
    const [result] = await connection.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    await connection.end();
    return result;
  } catch (error) {
    throw error; 
  }
};

const deleteUser = async (connection, userId) => {
  const query = `DELETE FROM users WHERE id = ?`;
  await connection.execute(query, [userId]);
};


module.exports = { createUser, deleteUser };