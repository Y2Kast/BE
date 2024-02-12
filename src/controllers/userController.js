const User = require('../models/userModel');

const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.createUser(username, password);
    res.status(201).send({ message: '회원가입 성공' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: '에러가 발생했습니다' });
  }
};

const deleteUser = async (req, res, connection) => {
  try {
    const { userId } = req.params; 
    await userModel.deleteUser(connection, userId);
    res.status(200).send('성공적으로 탈퇴되었습니다');
  } catch (error) {
    console.error(error);
    res.status(500).send('에러가 발생했습니다');
  }
};

module.exports = { signUp, deleteUser };