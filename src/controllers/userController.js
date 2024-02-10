const User = require('../models/userModel');

async function signUp(req, res) {
  const { username, password } = req.body;
  try {
    await User.createUser(username, password);
    res.status(201).send({ message: '회원가입 성공' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: '에러가 발생했습니다' });
  }
}

module.exports = { signUp };