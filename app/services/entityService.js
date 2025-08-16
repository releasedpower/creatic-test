const { Entity } = require('../models');

async function getAllEntities() {
  try {
    return await Entity.findAll();
  } catch (error) {
    throw error;
  }
}

async function getEntityById(id) {
  try {
    const entity = await Entity.findByPk(id);
    if (!entity) throw new Error('Entity not found');
    return entity;
  } catch (error) {
    throw error;
  }
}

async function createEntity(data) {
  try {
    return await Entity.create(data);
  } catch (error) {
    throw error;
  }
}

async function updateEntity(id, data) {
  try {
    const entity = await Entity.findByPk(id);
    if (!entity) throw new Error('Entity not found');
    return await entity.update(data);
  } catch (error) {
    throw error;
  }
}

async function deleteEntity(id) {
  try {
    const entity = await Entity.findByPk(id);
    if (!entity) throw new Error('Entity not found');
    await entity.destroy();
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEntities,
  getEntityById,
  createEntity,
  updateEntity,
  deleteEntity,
};
