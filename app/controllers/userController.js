const userService = require('../services/userService');

function formatSequelizeErrors(error) {
  if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
    return error.errors.map(e => e.message);
  }
  return [error.message];
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
    const { username, email, password } = req.body; 

    const newUser = await userService.createUser({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    const messages = formatSequelizeErrors(error);
    res.status(400).json({ errors: messages });
  }
}

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { username, email, password } = req.body;  

    const updatedUser = await userService.updateUser(id, { username, email, password });
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    const messages = formatSequelizeErrors(error);
    res.status(400).json({ errors: messages });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const deleted = await userService.deleteUser(id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
