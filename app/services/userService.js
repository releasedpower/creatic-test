const bcrypt = require('bcrypt');
const User = require('../models/user');
const { SALT_ROUNDS, MIN_PASSWORD_LENGTH } = require('../configs/securityConfig');

async function getAllUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error('Failed to fetch users: ' + error.message);
  }
}

async function getUserById(id) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    throw error;
  }
}

async function createUser(data) {
  try {
    if (!data.password || data.password.length < MIN_PASSWORD_LENGTH) {
      throw new Error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
    }

    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    return await User.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');

    if (data.password) {
      if (data.password.length < MIN_PASSWORD_LENGTH) {
        throw new Error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
      }
      data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
    }

    return await user.update(data);
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.destroy();
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
