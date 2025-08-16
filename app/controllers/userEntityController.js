const userEntityService = require('../services/userEntityService');

async function getAllUserEntities(req, res) {
  try {
    const associations = await userEntityService.getAllUserEntities();
    res.json(associations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserEntityById(req, res) {
  try {
    const id = req.params.id;
    const association = await userEntityService.getUserEntityById(id);
    if (!association) return res.status(404).json({ error: 'Association not found' });
    res.json(association);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUserEntity(req, res) {
  try {
    const { userId, entityId } = req.body;
    const newAssociation = await userEntityService.createUserEntity({ userId, entityId });
    res.status(201).json(newAssociation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUserEntity(req, res) {
  try {
    const id = req.params.id;
    const { userId, entityId } = req.body;
    const updatedAssociation = await userEntityService.updateUserEntity(id, { userId, entityId });
    if (!updatedAssociation) return res.status(404).json({ error: 'Association not found' });
    res.json(updatedAssociation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUserEntity(req, res) {
  try {
    const id = req.params.id;
    const deleted = await userEntityService.deleteUserEntity(id);
    if (!deleted) return res.status(404).json({ error: 'Association not found' });
    res.json({ message: 'Association deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUserEntities,
  getUserEntityById,
  createUserEntity,
  updateUserEntity,
  deleteUserEntity,
};
