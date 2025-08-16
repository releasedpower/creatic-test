const UserEntity = require('../models/userEntity');

async function getAllUserEntities() {
  try {
    return await UserEntity.findAll();
  } catch (error) {
    throw error;
  }
}

async function getUserEntityById(id) {
  try {
    const association = await UserEntity.findByPk(id);
    if (!association) throw new Error('UserEntity association not found');
    return association;
  } catch (error) {
    throw error;
  }
}

async function createUserEntity(data) {
  try {
    return await UserEntity.create(data);
  } catch (error) {
    throw error;
  }
}

async function updateUserEntity(id, data) {
  try {
    const association = await UserEntity.findByPk(id);
    if (!association) throw new Error('UserEntity association not found');
    return await association.update(data);
  } catch (error) {
    throw error;
  }
}

async function deleteUserEntity(id) {
  try {
    const association = await UserEntity.findByPk(id);
    if (!association) throw new Error('UserEntity association not found');
    await association.destroy();
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUserEntities,
  getUserEntityById,
  createUserEntity,
  updateUserEntity,
  deleteUserEntity,
};
